import './EditPost.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PostForm from './PostForm'
import Confirmation from './Confirmation'

const EditPost = props => {
    const [formData, setFormData] = useState({
        category: 'lost',
        title: '',
        desc: '',
        date: '',
        time: '',
        location: '', 
        includeBounty: false,
        bounty: '',
        submitLabel: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)

    useEffect(() => {
        // take data from back-end
        setFormData({
            category: 'lost', 
            title: 'Missing Airpods', 
            desc: 'Lost them during class', 
            date: '2026-10-30', 
            time: '14:00', 
            location: 'Bobst Library', 
            includeBounty: true, 
            bounty: '$20', 
            submitLabel: 'Save Changes'
        })
    }, [])

    // remove post data; later shows confirmation screen
    const deletePost = () => {
        console.log("Removed Post")
        // remove data from back-end
        setIsDeleted(true)
    }

    return (
        <div className='editPost'>
            {(!isSubmitted && !isDeleted) && <h1>Edit Post</h1>}
            {!isDeleted && <PostForm 
                key={formData.title}
                {...formData}
                origin='edit'
                submitLabel='Save Changes' 
                isSubmitted={isSubmitted} 
                setIsSubmitted={setIsSubmitted} />}
            {(!isSubmitted && !isDeleted) && <Link className="link" to="/" style={{textDecoration: 'none'}}>Cancel</Link>}
            {(!isSubmitted && !isDeleted) && <button className='link' onClick={deletePost}>Delete</button>}
            {(!isSubmitted && isDeleted) && <Confirmation 
                title={`Post Deleted!`}
                message={`Your ${formData.category} item post is no longer visible to NYU students.`}
                viewPost={false} />}
        </div>
    );
}

export default EditPost