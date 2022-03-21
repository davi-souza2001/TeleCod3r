import Cod3rLogo from '../../../public/img/Cod3rLogo.png'

import './boxchat.css'

interface BoxChatProps{
    mensage: String
}

export function BoxChat(props: BoxChatProps) {
    return (
        <div className="contentGeralBoxChat">
            <div className="contentImageBoxChat">
                <img src={Cod3rLogo} alt="Foto do usuário" />
            </div>
            <div className="contentMensageBoxChat">
                <h4>Davi Souza</h4>
                <p>{props.mensage}</p>
            </div>
        </div>
    )
}