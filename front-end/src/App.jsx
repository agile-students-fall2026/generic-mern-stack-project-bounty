import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import { Link } from "react-router-dom"
import './App.css'
import NewPost from './NewPost'
import EditPost from './EditPost'
import Home from './Home'

function App() {

  // beware inevitable merge conflict
  return (
    <>
      <Router>
        <nav className="nav">
          <Link class="nav-logo" to="/" style={{textDecoration: 'none'}}>Bounty</Link>
          <div class="nav-links">
            <Link className="nav-link" to="/new-post" style={{textDecoration: 'none'}}>New</Link>
            {/* placeholder until actual post view screen is created */}
            <Link className="nav-link" to="/edit-post" style={{textDecoration: 'none'}}>Edit</Link>
            <Link className="nav-link" to="/messages" style={{textDecoration: 'none'}}>Messages</Link>
            <Link className="nav-link" to="/messages" style={{textDecoration: 'none'}}>Notifications</Link>
            <Link className="nav-link" to="/profile" style={{textDecoration: 'none'}}>Profile</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path='/edit-post' element={<EditPost />} />
        </Routes>

      </Router>
      
    </>
  )
}

export default App
