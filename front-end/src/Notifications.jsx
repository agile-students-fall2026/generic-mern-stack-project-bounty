
import './Notifications.css'
import { useState } from 'react'

const Notifications = () => {
    const [notifications, setNotifications] = useState([])

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
