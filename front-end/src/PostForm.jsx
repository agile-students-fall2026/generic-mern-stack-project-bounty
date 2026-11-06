import './PostForm.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Confirmation from './Confirmation'

const PostForm = props => {
    const [formData, setFormData] = useState({
        // should include a username field, true
        id: props.id, 
        category: props.category ?? 'lost',
        title: props.title ?? '',
        desc: props.desc ?? '',
        date: props.date ?? '',
        time: props.time ?? '',
        location: props.location ?? '', 
        includeBounty: props.includeBounty ?? false,
        bounty: props.bounty ?? ''
    })
    const [isValid, setIsValid] = useState(false)
    const [isEdited, setIsEdited] = useState(false)
    // const navigate = useNavigate()

    useEffect(() => {
        if (formData.includeBounty) {
            setIsValid(formData.title && formData.desc && formData.bounty)
        }
        else {
            setIsValid(formData.title && formData.desc)
        }
    }, [formData.includeBounty, formData.title, formData.desc, formData.bounty])

    useEffect(() => {
        setIsEdited(
            formData.category !== props.category ||
            formData.title !== props.title ||
            formData.desc !== props.desc ||
            formData.date !== props.date ||
            formData.time !== props.time ||
            formData.location !== props.location ||
            formData.includeBounty !== props.includeBounty ||
            formData.bounty !== props.bounty
        )
    }, [formData])

    // actually put the post form data into backend... will do in next sprint
    const submitForm = e => {
        e.preventDefault() // prevent normal browser submit behavior
        console.log('Form Submitted')
        props.setIsSubmitted(true)
        // navigate('/new-post/publish-confirmation')

        if (props.origin === 'publish') {
            console.log("Last check of id: " + props.id)
            props.setPostsData(prev => [formData, ...prev])
            props.setCount(prev => prev + 1)
        }
        else if (props.origin === 'edit') {
            props.setPostsData(prev => prev.map((post, index) => index === props.curr ? formData : post))
        }
    }

    return (
        <>
            {!props.isSubmitted && <form className='postForm' onSubmit={submitForm}>
                <div className='types'>
                    <input 
                        type='button' 
                        className={formData.category === 'lost' ? 'active' : 'inactive'} 
                        onClick={() => {
                            // must set to true instead of just !isLost b/c this choice is
                            // necessary, so can't unselect
                                setFormData({
                                    ...formData,
                                    category: 'lost'
                                })
                            }
                        }
                        value='Lost'
                    />
                    <input 
                        type='button' 
                        className={formData.category === 'found' ? 'active' : 'inactive'} 
                        onClick={() => {
                            // must set to true instead of just !isLost b/c this choice is
                            // necessary, so can't unselect
                                setFormData({
                                    ...formData,
                                    category: 'found'
                                })
                            }
                        }
                        value='Found'
                    />
                    <input 
                        type='button' 
                        className={formData.category === 'request' ? 'active' : 'inactive'} 
                        onClick={() => {
                            // must set to true instead of just !isLost b/c this choice is
                            // necessary, so can't unselect
                                setFormData({
                                    ...formData,
                                    category: 'request'
                                })
                            }
                        }
                        value='Request'
                    />
                </div>
                <div className='field'>
                    <label htmlFor='title' className='label'>Title*</label>
                    <input
                        type='text'
                        id='title'
                        value={formData.title}
                        required
                        onChange={e => setFormData({
                            ...formData, 
                            title: e.target.value
                        })}
                    />
                </div>
                <div className='field' id='descField'>
                    <label htmlFor='description' className='label'>Description*</label>
                    <textarea
                        id='description'
                        value={formData.desc}
                        required
                        onChange={e => setFormData({
                            ...formData, 
                            desc: e.target.value
                        })}
                    />
                </div>
                <div className='dateTimeField'>
                    <div className='field'>
                        <label htmlFor='date' className='label'>Date</label>
                        <input
                            type='date'
                            id='date'
                            value={formData.date}
                            onChange={e => setFormData({
                                ...formData, 
                                date: e.target.value
                            })}
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor='time' className='label'>Time</label>
                        <input 
                            type='time'
                            id='time'
                            value={formData.time}
                            onChange={e => setFormData({
                                ...formData, 
                                time: e.target.value
                            })}
                        />
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor='location' className='label'>Location</label>
                    <input
                        type='text'
                        id='location'
                        value={formData.location}
                        onChange={e => setFormData({
                            ...formData, 
                            location: e.target.value
                        })}
                    />
                </div>
                {/* would like to change this so that it looks nicer, but will keep it
                as is for now for functionality */}
                <div className='field'>
                    <label htmlFor='image' className='label'>Image</label>
                    <input
                        type='file'
                        id='image'
                    />
                </div>
                <div id='includeBountyField'>
                    <label htmlFor='includeBounty' className='label'>Include Bounty?</label>
                    <input
                        type='checkbox'
                        id='includeBounty'
                        checked={formData.includeBounty}
                        onChange={() => {
                            setFormData({
                                ...formData, 
                                includeBounty: !formData.includeBounty
                            })
                        }}
                    />
                </div>
                {formData.includeBounty && <div className='field'>
                    <label htmlFor='bounty' className='label'>Bounty*</label>
                    <input
                        type='text'
                        id='bounty'
                        value={formData.bounty}
                        required
                        onChange={e => setFormData({
                            ...formData, 
                            bounty: e.target.value
                        })}
                    />
                </div>}
                <button 
                    type='submit' 
                    className={isValid && isEdited ? 'submit' : 'disabled'} 
                    disabled={!isValid || !isEdited}
                >{props.submitLabel}</button>
            </form>}
            {props.isSubmitted && <div className='confirm'>
                <Confirmation 
                data={formData}
                    title={`Post ${props.origin === 'publish' ? 'Published!' : props.origin === 'edit' ? 'Edited!' : 'Resolved!'}`}
                    message={`Your ${formData.category} item post is now visible to NYU students.`}
                    info={`${formData.category.charAt(0).toUpperCase() + formData.category.slice(1)} Item
                        ${formData.date ? ` • ${formData.date}` : ''}
                        ${formData.time ? ` • ${formData.time}` : ''}
                        ${formData.location ? ` • ${formData.location}` : ''}`}
                    viewPost={true} />
            </div>}
        </>
    )
}

export default PostForm