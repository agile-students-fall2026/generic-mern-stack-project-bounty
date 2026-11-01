import './PostForm.css'
import { useState } from 'react'

const PostForm = props => {
    const [formData, setFormData] = useState({
        category: props.category ?? 'lost',
        title: props.title ?? '',
        desc: props.desc ?? '',
        date: props.date ?? '',
        time: props.time ?? '',
        location: props.location ?? '', 
        includeBounty: props.includeBounty ?? false,
        bounty: props.bounty ?? '',
        submit: props.submit ?? '', 
        submitType: props.submitType ?? ''
    })

    // actually put the post form data into backend... will do in next sprint(?)
    // am thinking of changing this so that each page that uses this form just passes
    // their own function into it (ex. publish button sends to publish confirmation screen vs.
    // edit button sends to edit confirmation screen)
    const submitForm = e => {
        e.preventDefault() // prevent normal browser submit behavior
        console.log('Form Submitted')
    }

    return (
        <form className='postForm' onSubmit={formData.submit || submitForm}>
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
                    className={formData.category === 'req' ? 'active' : 'inactive'} 
                    onClick={() => {
                        // must set to true instead of just !isLost b/c this choice is
                        // necessary, so can't unselect
                            setFormData({
                                ...formData,
                                category: 'req'
                            })
                        }
                    }
                    value='Request'
                />
            </div>
            <div className='field'>
                <label htmlFor='title' className='label'>Title</label>
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
                <label htmlFor='description' className='label'>Description</label>
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
                    onChange={() => setFormData({
                        ...formData, 
                        includeBounty: !formData.includeBounty
                    })}
                />
            </div>
            {formData.includeBounty && <div className='field'>
                <label htmlFor='bounty' className='label'>Bounty</label>
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
            <input type='submit' className='submit' value={formData.submitType} />
        </form>
    )
}

export default PostForm