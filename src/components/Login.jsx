import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
        const navigate = useNavigate()

        // initialize input fields
        const [email, setEmail] = useState('')
        const [password, setPassword]  = useState('')
        const [loginError, setLoginError] = useState('')

        const handleLogin = async (e) => {
            e.preventDefault()

            try{
                // fetch api and assign to variable 'response'
                const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
                    email,
                    password,
                })

                if (response.status === 200){
                    //other actions can be performed here too
                    alert('successful login')
                    navigate('/home')
                }
            } catch(error){
                setLoginError('Invalid username or password. Please try again')
                console.error('Error reveived during login: ', error)
            }
        }


  return (
    <div>

    </div>
  )
}

export default Login