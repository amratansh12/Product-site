import ProductsData from './ProductsData';
import './ProductsDisplay.css'

const ProductsDisplay = ({setProduct}) => {

    const openModal = (product) => {
        setProduct(product);
        const modal = document.getElementsByClassName("ProductModal")[0];
        modal.style.display = "flex";
    }

    return(
        <div className="productsDisplay">
            {ProductsData.map(product => (
                <div onClick={()=>openModal(product)} key={product.id} style={{backgroundImage: (product.imageUrl)}} className="productCard">
                    <img style={{borderRadius:"12px"}} height="150px" width="150px" src={product.imageUrl} />

                    <div>
                        <h2>{product.name}</h2>
                        <h3 style={{color: '#4890D1'}}>${product.price}</h3>
                        <h4>{product.description}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsDisplay;