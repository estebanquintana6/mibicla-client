import React from "react";
import styles from "./ProductSection.module.css";

const ProductSection = () => {
    return (
        <div className="bg-gradient-to-r from-gray-800 to-black p-[36px]">
            <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white text-center">Nuestros <span className="text-primary">productos.</span></h1>
            <div className="flex flex-nowrap basis-1">
                <div className="accesoriesBike mx-2">
                    <img src="https://cdn.shopify.com/s/files/1/2785/0670/products/prisma_sq_0000s_0004_Capa-17_5000x.png?v=1670353873"/>
                    <h2 className="font-bold mt-2 text-lg text-center text-white">Accesorios para ti</h2>
                </div>
                <div className="accesoriesPersona mx-2">
                    <img src="https://cdn.shopify.com/s/files/1/2785/0670/products/prisma_sq_0000s_0004_Capa-17_5000x.png?v=1670353873"/>
                    <h2 className="font-bold mt-2 text-lg text-center text-white">Accesorios para tu Bicla</h2>
                </div>
                <div className="herramienta mx-2">
                    <img src="https://cdn.shopify.com/s/files/1/2785/0670/products/prisma_sq_0000s_0004_Capa-17_5000x.png?v=1670353873"/>
                    <h2 className="font-bold mt-2 text-lg text-center text-white">Herramienta</h2>
                </div>
                <div className="mantenimiento mx-2">
                    <img src="https://cdn.shopify.com/s/files/1/2785/0670/products/prisma_sq_0000s_0004_Capa-17_5000x.png?v=1670353873"/>
                    <h2 className="font-bold mt-2 text-lg text-center text-white">Mantenimiento</h2>
                </div>
            </div>
        </div>
    )
};

export default ProductSection;
