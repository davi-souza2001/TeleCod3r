import { Header } from '../../components/Header'
import Cod3rLogo from '../../../public/img/Cod3rLogo.png'
import './home.css'

export function Home() {
  return (
    <div className="contentGeralHome">
      <Header />
      <div className="contentLeftBarHome">
        <div className="contentMensageMembersHome">
          <p>Membros online</p>
        </div>
        <div className="contentBoxUsersHome">
          <div className="boxUserHome">
            <img src={Cod3rLogo} alt="User Image" />
            <p>Davi Souza</p>
          </div>
          <div className="boxUserHome">
            <img src={Cod3rLogo} alt="User Image" />
            <p>Davi Souza</p>
          </div>
          <div className="boxUserHome">
            <img src={Cod3rLogo} alt="User Image" />
            <p>Davi Souza</p>
          </div>
          <div className="boxUserHome">
            <img src={Cod3rLogo} alt="User Image" />
            <p>Davi Souza</p>
          </div>
          <div className="boxUserHome">
            <img src={Cod3rLogo} alt="User Image" />
            <p>Davi Souza</p>
          </div>
          <div className="boxUserHome">
            <img src={Cod3rLogo} alt="User Image" />
            <p>Davi Souza</p>
          </div>
          <div className="boxUserHome">
            <img src={Cod3rLogo} alt="User Image" />
            <p>Davi Souza</p>
          </div>
          <div className="boxUserHome">
            <img src={Cod3rLogo} alt="User Image" />
            <p>Davi Souza</p>
          </div>
          <div className="boxUserHome">
            <img src={Cod3rLogo} alt="User Image" />
            <p>Davi Souza</p>
          </div>
          <div className="boxUserHome">
            <img src={Cod3rLogo} alt="User Image" />
            <p>Davi Souza</p>
          </div>
        </div>
      </div>
    </div>
  )
}