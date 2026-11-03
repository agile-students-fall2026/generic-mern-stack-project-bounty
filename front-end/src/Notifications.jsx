
import './Notifications.css'
import { useState } from 'react'

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: 'New message • Username B',
            description: 'Lorem ipsum dolor sit amet',
            time: 'Today · 2:04 PM',
            read: false,
            link: 'Open Conversation'
        },
        {
            id: 2,
            title: 'New message • Username C',
            description: 'Lorem ipsum dolor sit amet',
            time: 'Today · 1:35 PM',
            read: false,
            link: 'Open Conversation'
        },
        {
            id: 3,
            title: 'Post resolved • Username D',
            description: 'Lorem ipsum dolor sit amet',
            time: 'Yesterday · 4:10 PM',
            read: true,
            link: 'View Post'
        },
        {
            id: 4,
            title: 'Request fulfilled • Username E',
            description: 'Lorem ipsum dolor sit amet',
            time: 'Oct 17 · 5:20 PM',
            read: true,
            link: 'View Post'
        }
    ])

    const unreadCount = notifications.filter(n => !n.read).length

    const markAllRead = () => {
        setNotifications(notifications.map(n => ({
            ...n,
            read: true
        })))
    }

    return (
        <div className="notifications">
            <h1>Notifications</h1>

            <div className="notificationHeader">
                <p>{unreadCount} unread</p>
                <button onClick={markAllRead} disabled={unreadCount === 0}>
                    Mark all as read
                </button>
            </div>

            <div className="notificationList">
                {notifications.map(n => (
                    <div className="notificationItem" key={n.id}>
                        <div className="notificationImage">pic</div>

                        <div className="notificationContent">
                            <h3>{n.title}</h3>
                            <p>{n.description}</p>
                            <span>
                                {n.time} · {n.read ? 'Read' : 'Unread'}
                            </span>
                            <a href="#" onClick={e => e.preventDefault()}>
                                {n.link}
                            </a>
                        </div>

                        {!n.read && <div className="unreadDot"></div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notifications
