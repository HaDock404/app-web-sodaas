import { Link } from 'react-router-dom'
import '../styles/product.css'

function Product(props) {
    return (
        <section className='product-section appear' style={{border: props.border}}>
            <div className='title-product highlight'>{props.title}</div>
            <div className='intro-product'>{props.intro}</div>
            <div className='image-product'>
                <img className='image_product' src={props.image} alt="image" />
            </div>
            <Link to={props.link} className='button-product'>{props.button}</Link>
            <div className='info-product info-grey'>{props.info_01}</div>
            <div className='info-product'>{props.info_02}</div>
            <div className='info-product info-grey'>{props.info_03}</div>
            <div className='info-product'>{props.info_04}</div>
            <div className='info-product info-grey' style={{backgroundColor: props.style1}}>{props.info_05}</div>
            <div className='progress-product' style={{display: props.display}}>🙈 {props.greatings}</div>
        </section>
    )
}

export default Product