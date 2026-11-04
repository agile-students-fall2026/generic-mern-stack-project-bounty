import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import { Link } from "react-router-dom"
import './App.css'
import NewPost from './NewPost'
import EditPost from './EditPost'
import Home from './Home'
import BountyChoice from './BountyChoice'

function App() {

  // beware inevitable merge conflict
  return (
    <>
      <Router>
        <nav className="header">
          <Link className="link" to="/new-post">New</Link>
          <Link className="link" to="/">Bounty</Link>
          <Link className="link" to="/profile">Profile</Link>
          {/* placeholder until actual post view screen is created */}
          <Link className="link" to="/edit-post">Edit</Link>
          <Link className='link' to='/resolve-post'>Resolve</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path='/edit-post' element={<EditPost />} />
          <Route path='/resolve-post' element={<BountyChoice />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
