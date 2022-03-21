import Cod3rLogo from '../../../public/img/Cod3rLogo.png'

import './boxchat.css'

interface BoxChatProps{
    mensage: String
    name: String
    photoUser?: string | undefined
}

export function BoxChat(props: BoxChatProps) {
    return (
        <div className="contentGeralBoxChat">
            <div className="contentImageBoxChat">
                <img src={props.photoUser} alt="Foto do usuário" />
            </div>
            <div className="contentMensageBoxChat">
                <h4>{props.name}</h4>
                <p>{props.mensage}</p>
            </div>
        </div>
    )
}