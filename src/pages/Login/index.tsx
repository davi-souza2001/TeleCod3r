import Cod3rLogo from '../../../public/img/Cod3rLogo.png'
import { AiFillGoogleCircle } from 'react-icons/ai'

import './login.css'
import UseAuth from '../../services/hooks/useAuth'

export function Login() {

  const { loginGoogle } = UseAuth()

  return (
    <div className="contentGeralLogin">
      <div className="boxLogin">
        <div className="contentTitleLogin">
          <img src={Cod3rLogo} alt="Cod3r Logo" />
          <p>TeleCod3r</p>
        </div>
        <div className="contentAlertLogin">
          <p>Login with</p>
        </div>
        <div className="contentIconGoogle" onClick={loginGoogle}>
          <div className="contentIconLogin">
            <AiFillGoogleCircle style={{ cursor: 'pointer', color: '#fff' }} />
          </div>
          <div className="contentMensageLogin">
            <p>Logar com Google</p>
          </div>
        </div>
        <div className="contentReadMoreLogin">
          <h4>The chat for Devs</h4>
          <p>Interact with your dev friends here with our chat</p>
        </div>
      </div>
    </div>
  )
}