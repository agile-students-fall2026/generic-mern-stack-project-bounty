import './NewPost.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PostForm from './PostForm'

const NewPost = props => {
    const [isLost, setIsLost] = useState(true)
    const [isFound, setIsFound] = useState(false)
    const [isReq, setIsReq] = useState(false)

    return (
        <div className='newPost'>
            <h1>Create Post</h1>
            {/* since each post actually has a type according to these buttons, 
            will probably have to move this into the post form component */}
            <div className='types'>
                <button 
                    className={isLost ? 'active' : 'inactive'} 
                    onClick={() => {
                        // must set to true instead of just !isLost b/c this choice is
                        // necessary, so can't unselect
                            setIsLost(true)
                            setIsFound(false)
                            setIsReq(false)
                        }
                    }
                >Lost</button>
                <button 
                    className={isFound ? 'active' : 'inactive'} 
                    onClick={() => {
                            setIsFound(true)
                            setIsLost(false)
                            setIsReq(false)
                        }
                    }
                >Found</button>
                <button 
                    className={isReq ? 'active' : 'inactive'} 
                    onClick={() => {
                            setIsReq(true)
                            setIsLost(false)
                            setIsFound(false)
                        }
                    }
                >Request</button>
            </div>
            {/* honestly, for below, should actually just make it a form element
            since eventually, we will actually need to keep track of the data submitted */}
            <PostForm />
        </div>
    );
}

export default NewPost