import { HiPaperAirplane } from "react-icons/hi";

import { BoxChat } from "../../components/BoxChat";
import { Header } from '../../components/Header'
import { BoxUser } from '../../components/BoxUser'
import './home.css'
import UseAuth from "../../services/hooks/useAuth";

export function Home() {
  const {user} = UseAuth()

  console.log(user)

  return (
    <>
      <Header nameUser={user?.name || 'Sem login'}/>
      <div className="contentGeralHome">
        <div className="contentLeftBarHome">
          <div className="contentMensageMembersHome">
            <p>Membros online</p>
          </div>
          <div className="contentBoxUsersHome">
            <BoxUser />
          </div>
        </div>
        <div className="contentBoxMensagesHome">
          <div className="contentBoxChatHome">
            <BoxChat mensage="alooo"/>
            <BoxChat mensage="loreasd"/>
          </div>
          <div className="contentInputMensageHome">
            <form>
              <input type="text" />
              <button><HiPaperAirplane/></button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}