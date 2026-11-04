
import './PrivateChat.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const PrivateChat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: 'yo you got my stuff', sender: 'other', time: '1:58 PM' },
        { id: 2, text: 'yea i got it', sender: 'you', time: '2:00 PM' },
        { id: 3, text: 'where', sender: 'other', time: '2:04 PM' },
        { id: 4, text: 'yo mama crib', sender: 'you', time: '2:04 PM' },
        { id: 5, text: '?', sender: 'other', time: '2:04 PM' },
        { id: 6, text: '?', sender: 'you', time: '2:04 PM' }
    ])

    return (
        <div className="privateChat">
            <Link to="/messages"> Back to Messages</Link>

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
        </div>
    )
}

export default PrivateChat
