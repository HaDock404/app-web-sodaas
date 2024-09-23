import '../styles/article.css'

function Article() {
    return (
        <section className='section'>
            <article className='text-article'>
                <h2 className='title-article'>Test de titre</h2>
                <div className='text-div'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis adipisci illum obcaecati? Officia incidunt, aliquam ex consequatur maxime vero! Voluptates molestiae voluptas et neque mollitia nisi incidunt eligendi sapiente fugiat!
                </div>
            </article>
            <article className='gradient-border'>
                test image
            </article>
        </section>
    )
}

export default Article