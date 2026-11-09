import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = props => {
    const navigate = useNavigate()

    const login = e => {
        e.preventDefault()

        navigate('/')
        props.setIsLoggedIn(true)
    }

    return (
        <div className='login'>
            <h1 className='logo'>Bounty</h1>

            <form className='loginForm' onSubmit={login}>
                <div className='field'>
                    <label htmlFor="email">Email</label>
                    <input id='email' type="email" required />
                </div>

                <div className='field'>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" required />
                </div>

                <Link >Sign Up</Link>
                
                <button className='submit' type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login