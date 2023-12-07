import './ProductList.css'
import ProductsData from './ProductsData'

const ProductList = ({setProduct}) => {

    const openModal = (product) => {
        setProduct(product);
        const modal = document.getElementsByClassName("ProductModal")[0];
        modal.style.display = "flex";
    }

    return(
        <div className='productList'>
            <ul className='productListItems'>
            {ProductsData.map(product=>(
                <li onClick={()=>openModal(product)} className='productListItem' key={product.id}>{product.name}</li>
            ))}
            </ul>
        </div>
    )
}

export default ProductList;