import '../styles/words.css'
import Tournesol from '../assets/images/tournesol.png'

function Words() {
    return (
        <section className='words-section'>
            <article className='title-words'>
                <span className='highlight'>Hi everyone, thx to visit us</span> 👋
            </article>
            <article className='text-words'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit velit adipisci exercitationem consequuntur quis nulla architecto mollitia officia, soluta voluptates laudantium aperiam fugit, minus reiciendis, perferendis nam veniam ratione molestiae.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit velit adipisci exercitationem consequuntur quis nulla architecto mollitia officia, soluta voluptates laudantium aperiam fugit, minus reiciendis, <span className='highlight'>perferendis</span> nam veniam ratione molestiae.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit velit adipisci exercitationem consequuntur quis nulla architecto mollitia officia, soluta voluptates laudantium aperiam fugit, minus reiciendis, perferendis nam veniam ratione molestiae.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <span className='highlight'>Reprehenderit</span> velit adipisci exercitationem consequuntur quis nulla architecto mollitia officia, soluta voluptates laudantium aperiam fugit, minus reiciendis, perferendis nam veniam ratione molestiae.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </article>
            <article className='end-words'>
                <img src={Tournesol} alt="" className='tournesol'/>
                <div className='end-word-info'>
                    <div className='end-words-info-name'>0xtourneSol</div>
                    <div className='end-words-info-job'>Founder</div>
                </div>
            </article>
        </section>
    )
}

export default Words