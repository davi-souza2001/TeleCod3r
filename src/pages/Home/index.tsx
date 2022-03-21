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
        <div>
          asdasd
        </div>
      </div>
    </>
  )
}