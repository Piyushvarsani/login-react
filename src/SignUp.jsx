import React, { useState } from 'react'
import Input from './Input'
import Lable from './Lable'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
    const validatName = " /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/"
    const validatEmail = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
    const validatPassword = "/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/"

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate();
    function handelSignUp(e) {
        e.preventDefault()
        if (userEmail && userEmail && password === confirmPassword) {
            localStorage.setItem('userName', userName)
            localStorage.setItem('userEmail', userEmail)
            localStorage.setItem('userPassword', password)
            navigate('/login')
        }
    }
    return (
        <>
            <h1>SignUp</h1>
            <form action="">
                <Lable lableName='Name' htmlFor='signName' />
                <Input type='text' value={userName} placeholder='enter name' id='signName' setData={setUserName} pattern={validatName} />
                <Lable lableName='Email' htmlFor='signEmail' />
                <Input type='email' value={userEmail} placeholder='enter email' id='signEmail' setData={setUserEmail} pattern={validatEmail} />
                <Lable lableName='password' htmlFor='signPass' />
                <Input type='password' value={password} placeholder='enter password' id='signPass' setData={setPassword} pattern={validatPassword} />
                <Lable lableName='confirm password' htmlFor='signConfirm' />
                <Input type='password' value={confirmPassword} placeholder='confirm password' id='signConfirm' setData={setConfirmPassword} />
                <button onClick={handelSignUp}>Sign Up</button>
            </form>
            <Link to='/login'>Already user?</Link>
        </>
    )
}
