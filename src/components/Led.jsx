import '../styles/led.css'

function Led() {
    return (
        <svg className='led' width="30" height="30" viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="10" fill="#4ADE80"/>
            <circle className='push_notification' cx="15" cy="15" r="10" fill="#4ADE80"/>
        </svg>
    )
}

export default Led