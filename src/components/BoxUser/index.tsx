import Cod3rLogo from '../../../public/img/Cod3rLogo.png'
import './boxuser.css'

interface BoxUserProps{
    userName?: String | null
}

export function BoxUser(props: BoxUserProps) {
    return (
        <div className="boxUserHome">
            <img src={Cod3rLogo} alt="User Image" />
            <p>{props.userName}</p>
        </div>
    )
}