
import './Messages.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Messages = () => {
    const [conversations, setConversations] = useState([
        {
            id: 1,
            username: 'Alice A.',
            item: 'Lost Item',
            preview: 'dub',
            time: '2:04 PM',
            read: false
        },
        {
            id: 2,
            username: 'Bob B.',
            item: 'Lost Item',
            preview: 'Lorem ipsum dolor sit amet',
            time: '1:35 PM',
            read: false
        },
        {
            id: 3,
            username: 'Carol C.',
            item: 'Lost Item',
            preview: 'Lorem ipsum dolor sit amet',
            time: 'Yesterday',
            read: true
        },
        {
            id: 4,
            username: 'Dave D.',
            item: 'Lost Item',
            preview: 'Lorem ipsum dolor sit amet',
            time: 'Oct 17',
            read: true
        }
    ])
    const pfps = ['pfpA.jpg', 'pfpB.jpg', 'pfpC.jpg', 'pfpD.jpg']

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
                {filtered.map((c, index) => (
                    <div className="messageItem" key={c.id}>
                        {/* <div className="messageImage">pic</div> */}
                        <img className='messageImage' src={`../public/pfps/${pfps[index]}`} />

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
