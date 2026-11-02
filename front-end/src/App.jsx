// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import './App.css'
// below is mine; noting for inevitable merge conflict
// import NewPost from './NewPost'
// import Home from './Home'
import BountyChoice from './BountyChoice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        {/* <nav className="header">
          <Link className="link" to="/new-post" style={{textDecoration: 'none'}}>New</Link>
          <Link className="link" to="/" style={{textDecoration: 'none'}}>Bounty</Link>
          <Link className="link" to="/animals" style={{textDecoration: 'none'}}>Profile</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<BountyChoice />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
