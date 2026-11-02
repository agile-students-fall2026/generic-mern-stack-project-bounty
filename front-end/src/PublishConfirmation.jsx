// import './PublishConfirmation.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Confirmation from './Confirmation'

const PublishConfirmation = props => {
    const [postType, setPostType] = useState('')

    // the postType should be taken from back-end on what type of post it was
    useEffect(() => {
        setPostType('lost')
    })

    return (
        <div>
            <Confirmation 
                title='Post Published!' 
                message={`Your ${postType} item post is now visible to NYU students.`}
                info='Lost item - Location Name' 
                viewPost={true} />
        </div>
    )
}

export default PublishConfirmation