import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Profile.css'

// resolving a post deletes it from postsData, so these are placeholders until the back-end keeps old posts
const resolvedPosts = [
  { title: 'Lost AirPods', category: 'lost', location: 'Bobst Library', date: '2026-10-20' },
  { title: 'Found Student ID', category: 'found', location: 'Kimmel Center', date: '2026-10-12' },
]

function PostHistory({ postsData }) {
  const [tab, setTab] = useState('active')
  const navigate = useNavigate()

  const activePosts = postsData.filter((post) => post.username === 'You')
  const posts = tab === 'active' ? activePosts : resolvedPosts

  return (
    <div className="profile-page">
      <h1>My Posts</h1>

      <div className="profile-tabs">
        <button
          type="button"
          className={tab === 'active' ? 'profile-tab-selected' : ''}
          onClick={() => setTab('active')}
        >
          Active ({activePosts.length})
        </button>
        <button
          type="button"
          className={tab === 'resolved' ? 'profile-tab-selected' : ''}
          onClick={() => setTab('resolved')}
        >
          Resolved ({resolvedPosts.length})
        </button>
      </div>

      {posts.length === 0 && <p>No posts yet.</p>}

      <ul className="profile-post-list">
        {posts.map((post, index) => (
          <li key={index}>
            <strong>{post.title}</strong> | {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            {post.location && <p>{post.location}</p>}
            {post.date && <p>{post.date}</p>}
          </li>
        ))}
      </ul>

      <button type="button" className="profile-btn-link" onClick={() => navigate('/profile')}>
        Back to Profile
      </button>
    </div>
  )
}

export default PostHistory
