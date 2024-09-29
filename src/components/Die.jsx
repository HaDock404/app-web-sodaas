import '../styles/die.css'
import Github from '../assets/images/github.jpg'

function Die() {
    return (
        <div className='die'>
            <div class="container">
                <div class="message">
                    <div className='notification-placement'>
                        <img className='github' src={Github} alt="" />
                        <div className='notification-title'>Github</div>
                    </div>
                    <div className='notification-text'>Marie push something</div>
                </div>
                <div class="message">
                <div className='notification-placement'>
                        <img className='github' src={Github} alt="" />
                        <div className='notification-title'>Github</div>
                    </div>
                    <div className='notification-text'>Marie push something</div>
                </div>
                <div class="message">
                <div className='notification-placement'>
                        <img className='github' src={Github} alt="" />
                        <div className='notification-title'>Github</div>
                    </div>
                    <div className='notification-text'>Marie push something</div>
                </div>
                <div class="message">
                <div className='notification-placement'>
                        <img className='github' src={Github} alt="" />
                        <div className='notification-title'>Github</div>
                    </div>
                    <div className='notification-text'>Marie push something</div>
                </div>
            </div>
        </div>
    )
}

export default Die