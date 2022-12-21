import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoading, error } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await login(email, password)
    }
    
    return (
        <form className='login' onSubmit={handleSubmit}>
            <h3>Log In</h3>

            <label>Email address: </label>
            <input
                type="email"
                placeholder='johndoe@gmail.com'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password: </label>
            <input
                type="password"
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading}>Log in</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}
