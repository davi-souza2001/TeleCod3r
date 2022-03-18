import Cod3rLogo from '../../../public/img/Cod3rLogo.png'
import './header.css'

export default function Header() {
    return (
        <div className="contentGeral">
            <div className="contentTitleLogo">
                <img src={Cod3rLogo} alt="Logo Telecod3r" />
                <h3>TeleCod3r</h3>
            </div>
            <div className="contentUserInfo">
                <p>Davi Souza</p>
                <img src={Cod3rLogo} alt="imagem usuário" />
            </div>
        </div>
    )
}