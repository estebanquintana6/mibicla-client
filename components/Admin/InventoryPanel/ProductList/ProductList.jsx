import React, { useState } from "react";

import { TrashIcon, PencilIcon } from "@heroicons/react/20/solid";

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
        name: "Ejemplo sadsadsadasdsa",
        imgUrl: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
    }]);

    return (
        <div>
            <div className="rounded-sm border border-stroke shadow-default">
                <div
                    className="bg-gray-700 text-gray-400 grid grid-cols-6 border-t border-stroke py-4 px-4 sm:grid-cols-8 md:px-6 2xl:px-7.5">
                    <div className="xs:col-span-2 lg:col-span-4 flex items-center">
                        <p className="font-medium">Nombre</p>
                    </div>
                    <div className="col-span-1 hidden items-center sm:flex">
                        <p className="font-medium">Categoría</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="font-medium">Precio</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="font-medium">Marca</p>
                    </div>
                    <div className="xs:col-span-2 lg:col-span-1 flex items-center mx-auto">
                        <p className="font-medium">Acciones</p>
                    </div>
                </div>
                {products.map((product) =>
                    <Product key={product._id} {...product}></Product>
                )}
            </div>
            <div className="flex flex-col items-center mt-6">
                <span className="text-sm text-gray-700">
                    Showing <span className="font-semibold text-gray-900">1</span> to <span className="font-semibold text-gray-900">10</span> of <span className="font-semibold text-gray-900">100</span> Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900">
                        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                        Prev
                    </button>
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900">
                        Next
                        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductList;