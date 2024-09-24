import '../styles/article.css'

function Article(props) {
    return (
        <section className='section'>
            <article className='text-article'>
                <h2 className='title-article'>{props.article_title}</h2>
                <div className='text-div'>{props.article_text}</div>
            </article>
            <article className='gradient-border'>
                test image
            </article>
        </section>
    )
}

export default Article