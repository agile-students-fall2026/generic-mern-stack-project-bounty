import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './Home.css'

const PostElement = props => {
    return(
        <>
        <div id="docs">
          <div className='profile'>
            <img className="icon" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Profile_avatar_placeholder_large.png/250px-Profile_avatar_placeholder_large.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"></img>
            <p>{props.username}</p>
          </div>
          <h2>{props.item} | {props.status}</h2>
          <p>{props.text}</p>
          <h4>Date: {!props.date ? 'N/A' : props.date}</h4>
          <h4>Time: {!props.time ? 'N/A' : props.time}</h4>
          <h4>Location: {!props.location ? 'N/A' : props.location }</h4>
          <div className='bounty-image-grouping'>
            <img className="bounty-image" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2019/12/Persona-5-Joker-Mask-Phantom-Thieves-Edition-Game.jpg"></img>
            <h2>{props.bounty ? 'BOUNTY' : 'NO BOUNTY'}</h2>
            <h2>{props.reward}</h2>
          </div>
          {/* doesn't work yet. needs to be based on ids not text, but yeah it works for demo */}
          <div className='buttons'>
            {(props.username !== 'Testing') && <Link className="nav-link" to={`/edit-post/1`} style={{textDecoration: 'none'}}>Edit</Link>}
            {(props.username !== 'Testing') && <Link className="nav-link" to={`/resolve-post/1`} style={{textDecoration: 'none'}}>Resolve</Link>}
          </div>
        </div>
    </>
    )
}

function Home() {
    const [postData, setPostData] = useState([{
    'username':"Testing",
    'item':"Lost my book",
    'status':"Lost",
    'text':"I desperately need some help",
    'date':"",
    'time':"",
    'location':"",
    'bounty':true,
    'reward':"$1"}]);
    const [lastState, setLastState] = useState()
      const loc = useLocation()
      const nav = useNavigate()
  if(loc.state?.newData && lastState != loc.state?.newData){
    const tempData = loc.state?.newData
    setPostData([...postData,
      { 'username': 'You',
        'item': tempData.title,
        'status': tempData.category,
        'text': tempData.desc,
        'date':tempData.date,
        'time': tempData.time,
        'location': tempData.location,
        'bounty': tempData.includeBounty,
        'reward': tempData.bounty
       }
        ])
        setLastState(loc.state?.newData)
  }
  const presentData = []
  postData.forEach((element, index) => {
    presentData.push(<PostElement 
      key={index}
      username={element.username} 
      item={element.item} 
      status={element.status} 
      text={element.text} 
      date={element.date}
      time={element.time} 
      location={element.location} 
      bounty={element.bounty} 
      reward={element.reward} />)
  })
  return (
    <>
      <section id="center">
        <div className="hero">
          <div>
          <input
                    type='text'
                    id='title'
                    placeholder="Search"
                />
                <button
                  type="button"
                  className="btn"
                >
                  Filter
              </button>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        {presentData}
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default Home
