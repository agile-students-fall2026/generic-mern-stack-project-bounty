
import './Messages.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Messages = () => {
    const [conversations, setConversations] = useState([
        {
            id: 1,
            username: 'Username B',
            item: 'Lost Item',
            preview: 'Lorem ipsum dolor sit amet',
            time: '2:04 PM',
            read: false
        },
        {
            id: 2,
            username: 'Username C',
            item: 'Lost Item',
            preview: 'Lorem ipsum dolor sit amet',
            time: '1:35 PM',
            read: false
        },
        {
            id: 3,
            username: 'Username D',
            item: 'Lost Item',
            preview: 'Lorem ipsum dolor sit amet',
            time: 'Yesterday',
            read: true
        },
        {
            id: 4,
            username: 'Username E',
            item: 'Lost Item',
            preview: 'Lorem ipsum dolor sit amet',
            time: 'Oct 17',
            read: true
        }
    ])

    const [search, setSearch] = useState('')

    const filtered = conversations.filter(c =>
        c.username.toLowerCase().includes(search.toLowerCase()) ||
        c.item.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="messages">
            <h1>Messages</h1>

            <div className="messageSearch">
                <label htmlFor="search">Search conversations</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search students or items"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div className="messageList">
                {filtered.map(c => (
                    <div className="messageItem" key={c.id}>
                        <div className="messageImage">pic</div>

                        <div className="messageContent">
                            <h3>{c.username}</h3>
                            <strong>{c.item}</strong>
                            <p>{c.preview}</p>
                        </div>

                        <div className="messageStatus">
                            <span>{c.time}</span>
                            {!c.read && <span className="messageDot"></span>}
                        </div>
                    </div>
                ))}
            </div>

            <Link className="backHome" to="/">
                Back to Home
            </Link>
        </div>
    )
}

export default Messages
