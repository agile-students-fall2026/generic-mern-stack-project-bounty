import './NewPost.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PostForm from './PostForm'

const NewPost = props => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    return (
        <div className='newPost'>
            {!isSubmitted && <h1>Create Post</h1>}
            <PostForm 
                origin='publish' // publish, edit, or resolve
                submitLabel='Publish Post' 
                isSubmitted={isSubmitted} 
                setIsSubmitted={setIsSubmitted} 
                // edit={false}
                postsData={props.postsData}
                setPostsData={props.setPostsData}
                />
            {!isSubmitted && <Link className="link" to="../" style={{textDecoration: 'none'}}>Cancel</Link>}
        </div>
    );
}

export default NewPost