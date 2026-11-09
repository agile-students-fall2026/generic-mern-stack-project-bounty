import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EditProfile from './EditProfile'
import ProfilePicture from './ProfilePicture'
import './Profile.css'

function Profile({ setIsLoggedIn }) {
const [profile, setProfile] = useState(null)
// placeholder data until the back-end is hooked up
const defaultProfile = {
  name: 'Username A',
  bio: 'Lorem ipsum dolor sit amet',
  picture: null,
}
  // const [profile, setProfile] = useState(defaultProfile)
  const [editing, setEditing] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/api/mockData')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch profile')
        return res.json()
      })
      .then(data => setProfile(data.profile))
      .catch(err => console.error(err))
  }, [])

  if (!profile) {
    return <div className="profile-page">Loading profile...</div>
  }

  if (editing) {
    return (
      <EditProfile
        profile={profile}
        onSave={(updated) => {
          setProfile(updated)
          setEditing(false)
        }}
        onCancel={() => setEditing(false)}
      />
    )
  }

  return (
    <div className="profile-page">
      <h1>Profile</h1>

      <div className="profile-header">
        <ProfilePicture src={profile.picture} />
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
        </div>
      </div>

      <button type="button" className="profile-btn-outline" onClick={() => setEditing(true)}>
        Edit Profile
      </button>

      <ul className="profile-links">
        <li>
          <button type="button" onClick={() => navigate('/profile/posts')}>View All Posts <span>›</span></button>
        </li>
        <li>
          <button type="button" onClick={() => navigate('/profile/settings')}>Account settings <span>›</span></button>
        </li>
      </ul>

      <button
        type="button"
        className="profile-btn-solid"
        onClick={() => {
          setIsLoggedIn(false)
          navigate('/login')
        }}
      >
        Log Out
      </button>

    </div>
  )
}

export default Profile
