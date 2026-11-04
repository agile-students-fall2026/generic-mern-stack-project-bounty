import { useRef, useState } from 'react'
import ProfilePicture from './ProfilePicture'

function EditProfile({ profile, onSave, onCancel }) {
  const [name, setName] = useState(profile.name)
  const [bio, setBio] = useState(profile.bio)
  const [picture, setPicture] = useState(profile.picture)
  const fileInput = useRef(null)

  // free a preview that was never saved
  function discardPreview() {
    if (picture && picture !== profile.picture) URL.revokeObjectURL(picture)
  }

  // not uploaded anywhere yet, just previewed locally
  function handlePictureChange(e) {
    const file = e.target.files[0]
    if (!file || !file.type.startsWith('image/')) return
    discardPreview()
    setPicture(URL.createObjectURL(file))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) return
    onSave({ name: name.trim(), bio: bio.trim(), picture })
  }

  function handleCancel() {
    discardPreview()
    onCancel()
  }

  return (
    <form className="profile-page" onSubmit={handleSubmit}>
      <h1>Edit Profile</h1>

      <div className="profile-pfp-upload">
        <ProfilePicture src={picture} />
        <button type="button" className="profile-btn-link" onClick={() => fileInput.current.click()}>
          Upload profile picture
        </button>
        <input ref={fileInput} type="file" accept="image/*" hidden onChange={handlePictureChange} />
      </div>

      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>

      <label>
        Bio (optional)
        <textarea rows="5" value={bio} onChange={(e) => setBio(e.target.value)} />
      </label>

      <button type="submit" className="profile-btn-solid">Save Changes</button>
      <button type="button" className="profile-btn-link" onClick={handleCancel}>Cancel</button>
    </form>
  )
}

export default EditProfile
