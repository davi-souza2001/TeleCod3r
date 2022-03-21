import { HiPaperAirplane } from "react-icons/hi";

import { BoxChat } from "../../components/BoxChat";
import { Header } from '../../components/Header'
import { BoxUser } from '../../components/BoxUser'
import './home.css'

export function Home() {
  return (
    <>
      <Header />
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
            <BoxChat/>
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