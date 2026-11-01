import './NewPost.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PostForm from './PostForm'

const NewPost = props => {
    // this should redirect to some confirmation page. for now, i will make it an alert
    const publishForm = e => {
        e.preventDefault()
        alert("Successfully Published")
    }

    return (
        <div className='newPost'>
            <h1>Create Post</h1>
            <PostForm submit={publishForm} submitType='Publish Post' />
        </div>
    );
}

export default NewPost