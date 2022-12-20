import { useState } from "react";
import { useAuthContext } from './useAuthContext'

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext();

    const register = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`api/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json();

        if(!response.ok) {
            setIsLoading(false)
            setError(data.error)
        }

        if(response.ok) {
            // save user in localStorage
            localStorage.setItem('user', JSON.stringify(data))

            // update auth context
            dispatch({ type: 'LOGIN', payload: data })

            // update loading state
            setIsLoading(false)
        }
    }

    return { register, isLoading, error }
}