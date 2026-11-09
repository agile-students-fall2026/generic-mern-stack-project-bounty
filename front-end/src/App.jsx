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
import PostHistory from './profile/PostHistory'
import AccountSettings from './profile/AccountSettings'


function App() {
  // Two placeholder posts for testing
  const [postsData, setPostsData] = useState([
    {
      id: 1, 
      username: 'Alice A.', 
      pfp: '/pfps/pfpA.jpg', 
      category: 'lost',
      title: 'Lost Wallet',
      desc:'Has anyone seen my wallet?',
      date: '',
      time:'',
      location: 'Warren Weaver Hall, Rm. 109', 
      image: '',
      includeBounty: false,
      bounty: ''
    }, 
    {
      id: 0, 
      username: 'You', 
      pfp: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Profile_avatar_placeholder_large.png/250px-Profile_avatar_placeholder_large.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail',      
      category: 'lost',
      title: 'Lost Keys',
      desc:'Please help!!!',
      date: '2026-11-02',
      time:'',
      location: 'Bobst Library', 
      image: '',
      includeBounty: false,
      bounty: ''
    }
  ])
  const [count, setCount] = useState(2)
  const [curr, setCurr] = useState(-1)

  // useEffect(() => {
  //   console.log(postsData)
  // }, [postsData])

  // Temporary mock conversations for testing
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
    },
    {
      id: '2',
      postId: 2,
      username: 'Bob B.',
      item: 'Lost Keys',
      read: false,
      messages: [
        {
          id: '2',
          sender: 'other',
          text: 'I think I found your keys!',
          time: '1:35 PM'
        }
      ]
    }
  ])

  // Temporary mock notifications for testing
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New message • Alice A.',
      description: 'Hey, did you find my wallet?',
      time: 'Today · 2:04 PM',
      read: false,
      link: 'Open Conversation',
      path: '/messages/1',
      pfp: 'pfpA.jpg'
    },
    {
      id: 2,
      title: 'New message • Bob B.',
      description: 'I think I found your keys!',
      time: 'Today · 1:35 PM',
      read: false,
      link: 'Open Conversation',
      path: '/messages/2',
      pfp: 'pfpB.jpg'
    }
  ])

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

  // beware inevitable merge conflict
  return (
    <>
      <Router>
        <nav className="nav">
          <Link className="nav-logo" to="/" style={{textDecoration: 'none'}}>Bounty</Link>
          <div className="nav-links">
            <Link className="nav-link" to="/new-post" style={{textDecoration: 'none'}}>New</Link>
            <Link className="nav-link" to="/messages" style={{textDecoration: 'none'}}>Messages</Link>
            <Link className="nav-link" to="/notifications" style={{textDecoration: 'none'}}>Notifications</Link>
            <Link className="nav-link" to="/profile" style={{textDecoration: 'none'}}>Profile</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home postsData={postsData} count={count} curr={curr} setCurr={setCurr} startConversation={startConversation} />} />
          <Route path="/new-post" element={<NewPost postsData={postsData} setPostsData={setPostsData} count={count} setCount={setCount} />} />
          <Route path='/edit-post/:id' element={<EditPost postsData={postsData} setPostsData={setPostsData} curr={curr} count={count} setCount={setCount} />} />
          <Route path='/resolve-post/:id' element={<BountyChoice postsData={postsData} setPostsData={setPostsData} curr={curr} count={count} setCount={setCount} />} />
          <Route path="/notifications" element={<Notifications notifications={notifications} setNotifications={setNotifications} />} />
          <Route path="/messages" element={<Messages conversations={conversations} />} />
          <Route path="/messages/:id" element={<PrivateChat conversations={conversations} setConversations={setConversations} sendMessage={sendMessage} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/posts' element={<PostHistory postsData={postsData} />} />
          <Route path='/profile/settings' element={<AccountSettings />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
