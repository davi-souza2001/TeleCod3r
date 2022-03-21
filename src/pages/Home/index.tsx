import { useState } from "react";
import { HiPaperAirplane } from "react-icons/hi";

import { BoxChat } from "../../components/BoxChat";
import { Header } from '../../components/Header'
import { BoxUser } from '../../components/BoxUser'
import './home.css'
import UseAuth from "../../services/hooks/useAuth";
import useChat from "../../services/hooks/useChat";

export function Home() {
  const { user, users } = UseAuth()
  const { sendMensage } = useChat()
  const [mensage, setMensage] = useState('')
  return (
    <>
      <Header nameUser={user?.name || 'Sem login'} />
      <div className="contentGeralHome">
        <div className="contentLeftBarHome">
          <div className="contentMensageMembersHome">
            <p>Membros online</p>
          </div>
          <div className="contentBoxUsersHome">
            {users?.map((users) => {
              return (
                <BoxUser userName={users?.name} key={users?.id} />
              )
            })}
          </div>
        </div>
        <div className="contentBoxMensagesHome">
          <div className="contentBoxChatHome">
            <BoxChat mensage="alooo" />
            <BoxChat mensage="loreasd" />
          </div>
          <div className="contentInputMensageHome">
            <form>
              <input type="text" onChange={(e) => setMensage(e.target.value)} />
              <button><HiPaperAirplane /></button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}