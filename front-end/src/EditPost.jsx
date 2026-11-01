import './EditPost.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PostForm from './PostForm'

const EditPost = props => {
    // this should redirect to some confirmation page. for now, i will make it an alert
    const saveEditForm = e => {
        e.preventDefault()
        alert("Successfully Edited")
    }

    // return to previous page (the post this form corresponds to) without saving changes
    const cancel = () => {
        alert("Go Back to Previous Page")
    }

    // remove post data; redirects to confirmation screen
    const deletePost = () => {
        alert("Removed Post")
    }

    return (
        <div className='editPost'>
            <h1>Edit Post</h1>
            <PostForm 
                category='lost'
                title='Lorem ipsum'
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
                date='2026-10-19'
                time='12:00'
                location='Lorem ipsum'
                includeBounty={true}
                bounty='$XXX'
                submit={saveEditForm} 
                submitType='Save Changes' />

            <button className='cancel' onClick={cancel}>Cancel</button>
            <button onClick={deletePost}>Delete</button>
        </div>
    );
}

export default EditPost