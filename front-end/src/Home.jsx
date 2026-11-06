import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './Home.css'

const PostElement = props => {
  const [showOptions, setShowOptions] = useState(false)

  const toggleOptions = () => {
    console.log(props.id)
    props.setCurr(props.count - 1 - props.id)
    console.log(props.postsData[ props.id - 1])
    setShowOptions(!showOptions)
  }

    return(
        <>
        <div className="docs">
          <div className='header'>
            <div className='profile'>
              <img className="icon" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Profile_avatar_placeholder_large.png/250px-Profile_avatar_placeholder_large.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"></img>
              <p>You</p>
            </div>
            <button className='settings' onClick={toggleOptions} >...</button>
          </div>
          {/* doesn't work yet. needs to be based on ids not text, but yeah it works for demo */}
          {showOptions && <div className='buttons'>
            {(props.username !== 'Testing') && <Link className="option" to={`/edit-post/${props.id}`} style={{textDecoration: 'none'}}>Edit</Link>}
            {(props.username !== 'Testing') && <Link className="option" to={`/resolve-post/${props.id}`} style={{textDecoration: 'none'}}>Resolve</Link>}
          </div>}
          <div className='content'>
            <div className='title'>
              <h2>{props.title} | {props.category.at(0).toUpperCase() + props.category.slice(1)}</h2>
              <p>{props.desc}</p>
            </div>
            {props.date && <p><strong>Date:</strong> {props.date}</p>}
            {props.time && <p><strong>Time:</strong> {props.time}</p>}
            {props.location && <p><strong>Location:</strong> {props.location}</p>}
          </div>
          <div className='bounty-image-grouping'>
            {/* <img className="bounty-image" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2019/12/Persona-5-Joker-Mask-Phantom-Thieves-Edition-Game.jpg"></img> */}
            <img className='bounty-image' src={props.image} alt="" />
            <h2>{props.includeBounty ? 'BOUNTY' : 'NO BOUNTY'}</h2>
            <h3>{props.bounty}</h3>
          </div>
          
        </div>
    </>
    )
}

const Home = props => {

  return (
    <div id='bg'>
      <div id="search">
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

      <section id="next-steps">
        {props.postsData.length === 0 && <p>No Posts</p>}
        {props.postsData.length !== 0 && props.postsData.map((element, index) => {
          return (
            <PostElement 
              key={index}
              id={props.count - 1 - index}
              username={element.username} 
              category={element.category}
              title={element.title}
              desc={element.desc}
              date={element.date}
              time={element.time}
              location={element.location} 
              image={element.image}
              includeBounty={element.includeBounty} 
              bounty={element.bounty} 
              setCurr={props.setCurr}
              postsData={props.postsData}
              count={props.count}
            />
          )
        })}
      </section>
    </div>
  )
}

export default Home
