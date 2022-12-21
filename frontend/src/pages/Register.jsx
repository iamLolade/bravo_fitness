import { useState } from 'react'
import { useRegister } from '../hooks/useRegister'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { register, isLoading, error } = useRegister()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await register(email, password)
    }
    
    return (
        <form className='register' onSubmit={handleSubmit}>
            <h3>Register</h3>

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

            <button disabled={isLoading}>Register</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}
