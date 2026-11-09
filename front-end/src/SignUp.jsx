import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'

const SignUp = props => {
    const navigate = useNavigate()

    const signUp = e => {
        e.preventDefault()

        navigate('/')
        props.setIsLoggedIn(true)
    }

    return (
        <div className='signUp'>
            <h1 className='logo'>Bounty</h1>

            <form className='signUpForm' onSubmit={signUp}>
                <div className='field'>
                    <label htmlFor="name">Full Name</label>
                    <input id='name' type="text" required />
                </div>

                <div className='field'>
                    <label htmlFor="email">Email</label>
                    <input id='email' type="email" required />
                </div>

                <div className='field'>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" autoComplete='on' required />
                </div>

                <Link to='/login'>Log In</Link>
                
                <button className='submit' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp