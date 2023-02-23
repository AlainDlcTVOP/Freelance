import { useContext } from "react";

import { ProductsContext } from "../../context/products.context";

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div >
            {products.map(({id,name,imageUrl,price}) => (
                <div key={id}>
                    <h1>{name}</h1>
                    <img src={imageUrl} alt="BigCo Inc. logo" />
                    <h3>{price}</h3>
                </div>
            ))}
        </div>
    )
}

export default Shop;