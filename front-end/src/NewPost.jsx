import './NewPost.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PostForm from './PostForm'

const NewPost = props => {

    return (
        <div className='newPost'>
            <h1>Create Post</h1>
            <PostForm submitLabel='Publish Post' destination='/new-post/publish-confirmation' />
        </div>
    );
}

export default NewPost