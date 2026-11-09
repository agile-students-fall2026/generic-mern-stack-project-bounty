import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
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
  const [count, setCount] = useState(1)
  const [curr, setCurr] = useState(-1)

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
          <Route path="/" element={<Home postsData={postsData} setPostsData={setPostsData} count={count} curr={curr} setCurr={setCurr} />} />
          <Route path="/new-post" element={<NewPost postsData={postsData} setPostsData={setPostsData} count={count} setCount={setCount} />} />
          <Route path='/edit-post/:id' element={<EditPost postsData={postsData} setPostsData={setPostsData} curr={curr} count={count} setCount={setCount} />} />
          <Route path='/resolve-post/:id' element={<BountyChoice postsData={postsData} setPostsData={setPostsData} curr={curr} count={count} setCount={setCount} />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/1" element={<PrivateChat />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>

      </Router>
      
    </>
  )
}

export default App
