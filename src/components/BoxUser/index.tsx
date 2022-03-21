import Cod3rLogo from '../../../public/img/Cod3rLogo.png'
import './boxuser.css'

export function BoxUser() {
    return (
        <div className="boxUserHome">
            <img src={Cod3rLogo} alt="User Image" />
            <p>Davi Souza</p>
        </div>
    )
}