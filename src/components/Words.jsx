import '../styles/words.css'
import Tournesol from '../assets/images/tournesol.png'

function Words(props) {
    return (
        <section className='words-section'>
            <article className='title-words'>
                <span className='highlight'>{props.title}</span> 👋
            </article>
            <article className='text-words'>
                {props.part_01}
                <br />
                <br />
                {props.part_02}<span className='highlight'>{props.highlight_01}</span>{props.part_03}
                <br />
                <br />
                {props.part_04}<span className='highlight'>{props.highlight_02}</span>{props.part_05}
                <br />
                <br />
                {props.part_06}
            </article>
            <article className='end-words'>
                <img src={Tournesol} alt="" className='tournesol'/>
                <div className='end-word-info'>
                    <div className='end-words-info-name'>0xtourneSol</div>
                    <div className='end-words-info-job'>{props.founder}</div>
                </div>
            </article>
        </section>
    )
}

export default Words