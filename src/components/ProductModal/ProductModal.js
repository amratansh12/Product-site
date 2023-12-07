import './ProductModal.css'

const ProductModal = ({product}) => {
    const imageStyle = {
        backgroundImage: `url(${product.imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        backdropFilter: 'brightness(50%)'
    }

    const closeModal = () => {
        const modal = document.getElementsByClassName("ProductModal")[0];
        modal.style.display = "none";
    }

    return(
        <div className='ProductModal'>
            <div className='productModalCard' style={imageStyle}>
                <h2 style={{margin: '10px 0'}}>{product.name}</h2>
                <h2 className='price'>${product.price}</h2>
                <p>{product.longDescription}</p>

                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}

export default ProductModal;