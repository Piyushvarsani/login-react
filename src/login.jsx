import React, { useEffect, useState } from 'react'
import Input from './Input'
import Lable from './Lable'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [localUserName, setLocalUserName] = useState('')
  const [localUserEmail, setLocalUserEmail] = useState('')
  const [localpassword, setLocalpassword] = useState('')


  const navigate = useNavigate()

  useEffect(() => {
    setLocalUserName(localStorage.getItem('userName'))
    setLocalUserEmail(localStorage.getItem('userEmail'))
    setLocalpassword(localStorage.getItem('userPassword'))
  }, [])

  function handleLogin(e) {
    e.preventDefault();
    if ((user === localUserName || user === localUserEmail) && password === localpassword) {
      navigate('/')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <Lable lableName='User Name' htmlFor='loginName' />
      <Input type='text' placeholder='usename / email' id='loginName' value={user} setData={setUser} />
      <Lable lableName='Password' htmlFor='loginPass' />
      <Input type='password' placeholder='enter password' id='loginPass' value={password} setData={setPassword} />
      <button onClick={handleLogin}>Login</button>
      <form action=""></form>

      <Link to='/signup'>Register</Link>
    </div>
  )
}
