import { useState } from 'react'

import './App.css'
import UserContext from './context/UseContext'
import UserContexProvider from './context/UserContexProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContexProvider>
      <h1>Hello this useContext </h1>
      <Login/>
      <br />
      <Profile/>
     </UserContexProvider>
  )
}

export default App
