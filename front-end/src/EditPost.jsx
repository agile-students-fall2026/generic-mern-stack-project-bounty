import './EditPost.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PostForm from './PostForm'
import Confirmation from './Confirmation'

const EditPost = props => {
    const [formData, setFormData] = useState({
        id: -1,
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
        setFormData(props.postsData[props.curr])
    }, [props.curr])

    // remove post data; later shows confirmation screen
    const deletePost = () => {
        console.log("Removed Post")
        // remove data from back-end
        setIsDeleted(true)
        // console.log(props.count - props.curr - 1)
        // console.log(formData.id)
        props.setPostsData(prev => {
            return prev
                .filter(post => post.id !== (props.count - props.curr - 1))
                .map(post => {
                    if (post.id > (props.count - props.curr - 1)) {
                        return {
                            ...post, 
                            id: post.id - 1
                        }
                    }
                    return post;
                })
        })
        props.setCount(prev => prev - 1)
    }

    return (
        <div className='editPost'>
            {(!isSubmitted && !isDeleted) && <h1>Edit Post</h1>}
            {!isDeleted && <PostForm 
                postsData={props.postsData}
                setPostsData={props.setPostsData}
                key={formData.title}
                {...formData}
                origin='edit'
                submitLabel='Save Changes' 
                isSubmitted={isSubmitted} 
                setIsSubmitted={setIsSubmitted} 
                curr={props.curr} />}
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