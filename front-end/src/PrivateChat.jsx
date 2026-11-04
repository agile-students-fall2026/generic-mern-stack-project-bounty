
import './PrivateChat.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const PrivateChat = () => {
    const [messages] = useState([
        { id: 1, text: 'yo you got my stuff', sender: 'other', time: '1:58 PM' },
        { id: 2, text: 'yea i got it', sender: 'you', time: '2:00 PM' },
        { id: 3, text: 'where', sender: 'other', time: '2:04 PM' },
        { id: 4, text: 'bobst', sender: 'you', time: '2:04 PM' },
        { id: 5, text: 'ok coming', sender: 'other', time: '2:04 PM' },
        { id: 6, text: 'dub', sender: 'you', time: '2:05 PM' }
    ])

    return (
        <div className="privateChat">
            <Link to="/messages">Back to Messages</Link>

            <div className="chatUser">
                <div className="chatAvatar">pic</div>
                <h2>Username B</h2>
            </div>

            <div className="chatItem">
                <h3>Lost Item</h3>
                <p>Item Location · Bounty: $XXX</p>
            </div>

            <div className="chatMessages">
                {messages.map(m => (
                    <div className={`chatMessage ${m.sender}`} key={m.id}>
                        <div className="chatBubble">{m.text}</div>
                        <span>{m.sender === 'you' ? 'You' : 'Username B'} · {m.time}</span>
                    </div>
                ))}
            </div>

            <form className="chatForm">
                <label htmlFor="messageInput">Message</label>
                <div className="chatInput">
                    <input
                        id="messageInput"
                        type="text"
                        placeholder="Type a message..."
                    />
                    <button type="button">Send</button>
                </div>
            </form>
        </div>
    )
}

export default PrivateChat
