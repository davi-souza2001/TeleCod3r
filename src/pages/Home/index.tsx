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
  const { writeMensage, mensagesUsers } = useChat()
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
            {mensagesUsers?.map((msg: any) => {
              return (
                <BoxChat mensage={msg.mensage} key={msg.id} />
              )
            })}
          </div>
          <div className="contentInputMensageHome">
            <form onSubmit={(e) => {
              e.preventDefault()
              writeMensage(mensage)
              setMensage('')
            }}>
              <input type="text" onChange={(e) => setMensage(e.target.value)} value={mensage}/>
              <button type="submit" ><HiPaperAirplane /></button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}