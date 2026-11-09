import './Confirmation.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Confirmation = props => {

    return (
        <div className='confirmation'>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            <p>{props.info}</p>
            <nav className='confirmationButtons'>
                {props.viewPost && 
                    <Link className='link' id='view' to='/post' state={{newData : props.data}}>View Post</Link>}
                <Link className='link' to='/' state={{newData : props.data}}>Back to Home</Link>
            </nav>

        </div>
    )
}

export default Confirmation