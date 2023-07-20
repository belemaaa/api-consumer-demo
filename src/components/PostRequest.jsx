import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PostRequest = () => {
        const navigate = useNavigate();

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
                    setLoginError('')
                    alert('successful login')
                    navigate('/home')
                }
            } catch(error){
                setLoginError('Invalid username or password. Please try again')
                console.error('Error reveived during request: ', error)
            }
        }


  return (
    <div>
        <h1>Login</h1>
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        <form onSubmit={handleLogin}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
      </form>

    </div>
  )
}

export default PostRequest