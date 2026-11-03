import './EditPost.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PostForm from './PostForm'

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
    }

    return (
        <div className='editPost'>
            <h1>Edit Post</h1>
            <PostForm 
                key={formData.title}
                {...formData}
                submitLabel='Save Changes' />
            {!isSubmitted && <Link className="link" to="/" style={{textDecoration: 'none'}}>Cancel</Link>}
            <button id='delete' onClick={deletePost}>Delete</button>
        </div>
    );
}

export default EditPost