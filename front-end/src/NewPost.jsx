import './NewPost.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PostForm from './PostForm'
import PublishConfirmation from './PublishConfirmation'

const NewPost = props => {

    return (
        <div className='newPost'>
            <h1>Create Post</h1>
            <PostForm submitLabel='Save' />
            <Link className="link" to="/new-post/publish-confirmation" style={{textDecoration: 'none'}}>Publish Post</Link>
        </div>
    );
}

export default NewPost