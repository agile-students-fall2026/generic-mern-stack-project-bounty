// at the moment, unimplemented. to be entertained after demo, 
// as for now i just want to make something that works

// import './PostForm.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Confirmation from './Confirmation'

const PublishConfirmation = props => {
    return (
        <>
            <Confirmation 
                    title={`Post Published!`}
                    // message={`Your ${formData.category} item post is now visible to NYU students.`}
                    // info={`${formData.category.charAt(0).toUpperCase() + formData.category.slice(1)} Item
                    //     ${formData.date ? ` • ${formData.date}` : ''}
                    //     ${formData.time ? ` • ${formData.time}` : ''}
                    //     ${formData.location ? ` • ${formData.location}` : ''}`}
                    viewPost={true} />
            {/* <Link className="link" to="/" style={{textDecoration: 'none'}}>Back to Home</Link> */}
        </>
    )
} 

export default PublishConfirmation