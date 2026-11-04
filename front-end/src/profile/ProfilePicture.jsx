function ProfilePicture({ src, size = 70 }) {
  return (
    <div className="profile-pfp" style={{ width: size, height: size }}>
      {src ? <img src={src} alt="Profile" /> : <span>pfp</span>}
    </div>
  )
}

export default ProfilePicture
