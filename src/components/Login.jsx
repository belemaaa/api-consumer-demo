import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
        const navigate = useNavigate()
        const [email, setEmail] = useState('')
        const [password, setPassword]  = useState('')
        const [loginError, setLoginError] = useState('')
        

  return (
    <div>

    </div>
  )
}

export default Login