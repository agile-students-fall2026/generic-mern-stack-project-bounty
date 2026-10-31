import './NewPost.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NewPost = props => {
    const [isLost, setIsLost] = useState(false)
    const [isFound, setIsFound] = useState(false)
    const [isReq, setIsReq] = useState(false)

    return (
        <div className='newPost'>
            <h1>Create Post</h1>
            <div className='types'>
                <button 
                    className={isLost ? 'active' : 'inactive'} 
                    onClick={() => {
                            setIsLost(!isLost)
                            setIsFound(false)
                            setIsReq(false)
                        }
                    }
                >Lost</button>
                <button 
                    className={isFound ? 'active' : 'inactive'} 
                    onClick={() => {
                            setIsFound(!isFound)
                            setIsLost(false)
                            setIsReq(false)
                        }
                    }
                >Found</button>
                <button 
                    className={isReq ? 'active' : 'inactive'} 
                    onClick={() => {
                            setIsReq(!isReq)
                            setIsLost(false)
                            setIsFound(false)
                        }
                    }
                >Request</button>
            </div>
        </div>
    );
}

export default NewPost