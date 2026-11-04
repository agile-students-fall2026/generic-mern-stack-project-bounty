
import './PrivateChat.css'
import { Link } from 'react-router-dom'

const PrivateChat = () => {
    return (
        <div className="privateChat">
            <Link to="/messages">← Back to Messages</Link>

            <div className="chatUser">
                <div className="chatAvatar">pic</div>
                <h2>Username B</h2>
            </div>

            <div className="chatItem">
                <h3>Lost Item</h3>
                <p>Item Location · Bounty: $XXX</p>
            </div>

            <div className="chatMessages">
                {/* Messages will go here */}
            </div>
        </div>
    )
}

export default PrivateChat
