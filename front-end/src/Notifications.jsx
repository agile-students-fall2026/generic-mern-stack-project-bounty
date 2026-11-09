import './Notifications.css'
import { Link } from 'react-router-dom'

const Notifications = ({ notifications, setNotifications }) => {
    const unreadCount = notifications.filter(n => !n.read).length

    const markAllRead = () => {
        setNotifications(prev => prev.map(n => ({
            ...n,
            read: true
        })))
    }

    const markRead = id => {
        setNotifications(prev => prev.map(n =>
            n.id === id ? { ...n, read: true } : n
        ))
    }

    // Temporary testing function until notification creation is implemented
    const simulateNotification = () => {
        setNotifications(prev => [{
            id: crypto.randomUUID(),
            title: 'New message • Alice A.',
            description: 'Testing a new notification!',
            time: 'Today · Just now',
            read: false,
            link: 'Open Conversation',
            path: '/messages/1',
            pfp: 'pfpA.jpg'
        }, ...prev])
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

            {/* Temporary testing button */}
            <button type="button" onClick={simulateNotification}>
                Simulate Notification
            </button>

            <div className="notificationList">
                {notifications.length === 0 && (
                    <p>No notifications yet.</p>
                )}

                {notifications.map(n => (
                    <div className="notificationItem" key={n.id}>
                        <img
                            className="notificationImage"
                            src={`/pfps/${n.pfp ?? 'pfpA.jpg'}`}
                            alt=""
                        />

                        <div className="notificationContent">
                            <h3>{n.title}</h3>
                            <p>{n.description}</p>
                            <span>
                                {n.time} · {n.read ? 'Read' : 'Unread'}
                            </span>
                            <Link
                                to={n.path}
                                onClick={() => markRead(n.id)}
                            >
                                {n.link}
                            </Link>
                        </div>

                        {!n.read && <div className="unreadDot"></div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notifications
