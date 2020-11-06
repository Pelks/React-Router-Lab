import products from "../../data/products.json";
import { Redirect } from "react-router-dom";

function ProductPage(props) {
    const product = products.find((product) => product.id === props.match.params.productId);

    // Redirect to Products page if no product found instead of erroring
    if (!product) return <Redirect to="/products" />;

    return (
        <main>
            <h1>
                {product.name} {product.icon}
            </h1>
            <p>{product.description}</p>
            <p>Product ID: {product.id}</p>
            <p>Category: {product.category}</p>
        </main>
    );
}

export default ProductPage;
