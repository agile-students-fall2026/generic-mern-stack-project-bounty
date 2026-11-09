import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './App.css'
import NewPost from './NewPost'
import EditPost from './EditPost'
import Home from './Home'
import Notifications from './Notifications'
import Messages from './Messages'
import PrivateChat from './PrivateChat'
import BountyChoice from './BountyChoice'
import Profile from './profile/Profile'

function App() {
  const [postsData, setPostsData] = useState([])
  const [user, setUser] = useState("You")
  const [count, setCount] = useState(0)
  const [curr, setCurr] = useState(-1)
  const [conversations, setConversations] = useState([])

  /*
  Temporary mock conversation until conversation creation is implemented
  const [conversations, setConversations] = useState([
    {
      id: '1',
      postId: 1,
      username: 'Alice A.',
      item: 'Lost Wallet',
      read: false,
      messages: [
        {
          id: '1',
          sender: 'other',
          text: 'Hey, did you find my wallet?',
          time: '2:04 PM'
        }
      ]
    }
  ])
  */

  const startConversation = post => {
    const existing = conversations.find(c => c.postId === post.id)

    if (existing) return existing.id

    const id = crypto.randomUUID()

    setConversations(prev => [{
      id,
      postId: post.id,
      username: post.username ?? 'Unknown',
      item: post.title,
      read: true,
      messages: []
    }, ...prev])

    return id
  }

  const sendMessage = (convoId, text, sender = 'you') => {
    if (!text.trim()) return

    setConversations(prev => prev.map(c =>
      c.id === convoId
        ? {
            ...c,
            read: sender === 'you',
            messages: [...c.messages, {
              id: crypto.randomUUID(),
              sender,
              text: text.trim(),
              time: new Date().toLocaleTimeString([], {
                hour: 'numeric',
                minute: '2-digit'
              })
            }]
          }
        : c
    ))
  }

  useEffect(() => {
    console.log("Current post's index: " + curr)
    console.log(postsData[curr])
  }, [curr])

  useEffect(() => {
    console.log("Count: " + count)
  }, [count])

  useEffect(() => {
    console.log(postsData)
  }, [postsData])

  // beware inevitable merge conflict
  return (
    <>
      <Router>
        <nav className="nav">
          <Link className="nav-logo" to="/" style={{textDecoration: 'none'}}>Bounty</Link>
          <div className="nav-links">
            <Link className="nav-link" to="/new-post" style={{textDecoration: 'none'}}>New</Link>
            {/* placeholder until actual post view screen is created */}
            {/* <Link className="nav-link" to="/edit-post" style={{textDecoration: 'none'}}>Edit</Link> */}
            <Link className="nav-link" to="/messages" style={{textDecoration: 'none'}}>Messages</Link>
            <Link className="nav-link" to="/notifications" style={{textDecoration: 'none'}}>Notifications</Link>
            <Link className="nav-link" to="/profile" style={{textDecoration: 'none'}}>Profile</Link>
            {/* <Link className='nav-link' to='/resolve-post' style={{textDecoration: 'none'}}>Resolve</Link> */}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home postsData={postsData} setPostsData={setPostsData} count={count} curr={curr} setCurr={setCurr} startConversation={startConversation} />} />
          <Route path="/new-post" element={<NewPost postsData={postsData} setPostsData={setPostsData} count={count} setCount={setCount} />} />
          <Route path='/edit-post/:id' element={<EditPost postsData={postsData} setPostsData={setPostsData} curr={curr} count={count} setCount={setCount} />} />
          {/* currently non-functional; i'll try it after demo */}
          {/* <Route path='/new-post/publish-confirmation' element={<PublishConfirmation />} /> */}
          <Route path='/resolve-post/:id' element={<BountyChoice postsData={postsData} setPostsData={setPostsData} curr={curr} count={count} setCount={setCount} />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/new-post" element={<NewPost />} /> */}
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages conversations={conversations} />} />
          <Route path="/messages/:id" element={<PrivateChat conversations={conversations} setConversations={setConversations} sendMessage={sendMessage} />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App