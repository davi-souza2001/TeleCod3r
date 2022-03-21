import { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cookie from 'js-cookie';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  auth,
  database,
  ref,
  get,
  set,
  child,
} from '../../firebase/config';

interface User {
  id: any ;
  email?: String | null ;
  name?: String | null ;
  photo?: string | null ;
}

interface AuthContextProps {
  loginGoogle?: () => Promise<void>;
  logout?: any;
  user?: User;
  getIfUserExists?: Function;
  users?: Array<User>;
}

const AuthContext = createContext<AuthContextProps>({});
const provider = new GoogleAuthProvider();

function setCookieIdUser(user: User) {
  Cookie.set('Admin-cookie-Telecod3r', user.id, {
    expires: 7,
  });
}

async function setUserInDataBase(user: User) {
  const dbRef = ref(database);
  get(child(dbRef, `users/${user.id}`))
    .then((snapshot: any) => {
      if (snapshot.exists()) {
        setCookieIdUser(user);
      }
      else {
        set(ref(database, 'users/' + user.id), {
          name: user.name,
          email: user.email,
          photo: user.photo,
          id: user.id,
        });
        setCookieIdUser(user);
      }
    })
    .catch((error: any) => {
      console.error(error);
    });
}

export function AuthProvider(props: any) {
  const [user, setUser] = useState<User>({
    id: '',
    email: '',
    name: '',
    photo: ''
  })
  const [users, setUsers] = useState<User[]>([])
  const token = Cookie.get('Admin-cookie-Telecod3r')
  let navigate = useNavigate();


  async function loginGoogle() {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userFinal: User = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          id: user.uid,
        };
        setUser(userFinal)
        setUserInDataBase(userFinal)
        navigate('/');

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  function logout() {
    Cookie.remove('Admin-cookie-Telecod3r')
    navigate('/login')
  }

  async function searchUserInformation(userToken: String) {
    const dbRef = ref(database);
    get(child(dbRef, `/users/${userToken}`))
      .then((res) => {
        if (res.exists()) {
          // console.log(res.val())
          setUser(res.val());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function getUsers() {
    const dbRef = ref(database);
    get(child(dbRef, `/users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val())
          const allUsers = snapshot.val();
          const userList: Array<any> = [];
          for (let id in allUsers) {
            userList.push({ id, ...allUsers[id] });
          }
          setUsers(userList);
        } else {
          console.log('Não tem nada');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (token) {
      searchUserInformation(token);
    } else{
      navigate('/login')
    }
  }, [token]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <AuthContext.Provider value={{ loginGoogle, user, logout, users }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;