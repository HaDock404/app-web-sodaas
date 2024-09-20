import { Link } from 'react-router-dom';
import '../styles/intro.css'

function Intro(props) {
    return (
        <div class="hero">
            <h1>
                <span class="highlight">{props.word_start}</span>{props.sentence}<span class="highlight">{props.word_end}</span>.
            </h1>
            <Link to="/" class="cta-button">{props.button}</Link>
        </div>
    )
}

export default Intro