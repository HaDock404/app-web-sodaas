import { Link } from 'react-router-dom';
import '../styles/notification.css'

function Notification(props) {
    return (
        <Link to="/products" className='notification' style={{width: props.width}}>
            <span className="icon">✨</span> 
            <span className="light-text">{props.text}</span> 
            <span className="arrow">→</span>
        </Link>
    )
}

export default Notification