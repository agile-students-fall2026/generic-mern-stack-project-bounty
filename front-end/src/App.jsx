// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import './App.css'
// beware inevitable merge conflict
// import NewPost from './NewPost'
// import Home from './Home'
import BountyChoice from './BountyChoice'

function App() {
  const [count, setCount] = useState(0)

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
          <Route path="/" element={<BountyChoice />} />
          {/* <Route path="/new-post" element={<NewPost />} />
          <Route path='/edit-post' element={<EditPost />} /> */}
        </Routes>

      </Router>
    </>
  )
}

export default App
