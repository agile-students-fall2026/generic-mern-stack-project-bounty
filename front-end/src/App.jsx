import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import { Link } from "react-router-dom"
import './App.css'
import NewPost from './NewPost'
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
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
