import ProductList from "./ProductList";
import './Products.css'
import ProductsDisplay from "./ProductsDisplay";

const Products = ({setProduct}) => {
    return(
        <div className="Products">
            <ProductList setProduct={setProduct}/>
            <ProductsDisplay setProduct={setProduct}/>
        </div>
    )
}

export default Products;