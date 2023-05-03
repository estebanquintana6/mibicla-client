import React, { useState } from "react";

import Product from "../Product/Product";

const ProductList = () => {
    const [products, setProducts] = useState([{
        _id: 1,
        name: "Ejemplo",
        imgUrl: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
    }, {
        _id: 2,
        name: "Ejemplo 2",
        imgUrl: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
    }, {
        _id: 3,
        name: "Ejemplo 2",
        imgUrl: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
    }]);

    return (
        <div id="tabs-1-panel-1" className="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex="0">
            <div className="grid xs:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
                {products.map((product) => 
                    <Product key={product._id} {...product} />
                )}
            </div>
        </div>
    );
}

export default ProductList;