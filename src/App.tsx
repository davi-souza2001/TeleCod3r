import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { AuthProvider } from './services/context/AuthContext'
import { ChatProvider } from './services/context/ChatContext'

function App() {

  return (
    <AuthProvider>
      <ChatProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </ChatProvider>
    </AuthProvider>
  )
}

export default App
