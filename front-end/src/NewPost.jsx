import './NewPost.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PostForm from './PostForm'

const NewPost = props => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    return (
        <div className='newPost'>
            {!isSubmitted && <h1>Create Post</h1>}
            <PostForm 
                origin='edit' // publish, edit, or resolve
                submitLabel='Publish Post' 
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted} />
            {!isSubmitted && <Link className="link" to="/" style={{textDecoration: 'none'}}>Cancel</Link>}
        </div>
    );
}

export default NewPost