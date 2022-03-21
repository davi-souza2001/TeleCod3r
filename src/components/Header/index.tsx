import UseAuth from '../../services/hooks/useAuth'
import Cod3rLogo from '../../../public/img/Cod3rLogo.png'

import './header.css'

interface HeaderProps {
    nameUser?: String;
    photoUser?: string | undefined
}

export function Header(props: HeaderProps) {
    const { logout } = UseAuth()

    return (
        <div className="contentGeralHeader">
            <div className="contentTitleLogoHeader">
                <img src={Cod3rLogo} alt="Logo Telecod3r" />
                <h3>TeleCod3r</h3>
            </div>
            <div className="contentUserInfoHeader">
                <p onClick={logout}>{props.nameUser}</p>
                <img src={props.photoUser || Cod3rLogo} alt="imagem usuário" />
            </div>
        </div>
    )
}