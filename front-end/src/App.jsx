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
        <nav className="header">
          <Link className="link" to="/new-post" style={{textDecoration: 'none'}}>New</Link>
          <Link className="link" to="/" style={{textDecoration: 'none'}}>Bounty</Link>
          <Link className="link" to="/profile" style={{textDecoration: 'none'}}>Profile</Link>
          {/* placeholder until actual post view screen is created */}
          <Link className="link" to="/edit-post" style={{textDecoration: 'none'}}>Edit</Link>
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
