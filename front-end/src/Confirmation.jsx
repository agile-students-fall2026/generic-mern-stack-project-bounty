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
                {/* rather, it should go to specific post link i think, so it prob
                has its own id or smth */}
                {props.viewPost && 
                    <Link className="link" to="/post" state={{newData : props.data}} style={{textDecoration: 'none'}}>View Post</Link>}
                <Link className="link" to="/" state={{newData : props.data}} style={{textDecoration: 'none'}}>Back to Home</Link>
            </nav>

        </div>
    )
}

export default Confirmation