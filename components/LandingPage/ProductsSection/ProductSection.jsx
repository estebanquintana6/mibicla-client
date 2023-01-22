import React from "react";

const ProductSection = () => {
    return (
        <div className="bg-gradient-to-r from-gray-800 to-black p-[36px]">
            <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white text-center">Nuestros <span className="text-primary">productos.</span></h1>
            <div className="grid md:grid-cols-4 xs:grid-cols-[repeat(2,minmax(150px,_2fr))] xs:grid-rows-[repeat(2,minmax(150px,_2fr))] md:grid-rows-1 gap-4 justify-between">
                <div className="mx-2 md:w-full">
                    <img src="https://cdn.shopify.com/s/files/1/2785/0670/products/prisma_sq_0000s_0004_Capa-17_5000x.png?v=1670353873"/>
                    <h2 className="font-bold mt-2 text-lg text-center text-white">Accesorios para ti</h2>
                </div>
                <div className="mx-2 md:w-full">
                    <img src="https://cdn.shopify.com/s/files/1/2785/0670/products/prisma_sq_0000s_0004_Capa-17_5000x.png?v=1670353873"/>
                    <h2 className="font-bold mt-2 text-lg text-center text-white">Accesorios para tu Bicla</h2>
                </div>
                <div className="mx-2 md:w-full">
                    <img src="https://cdn.shopify.com/s/files/1/2785/0670/products/prisma_sq_0000s_0004_Capa-17_5000x.png?v=1670353873"/>
                    <h2 className="font-bold mt-2 text-lg text-center text-white">Herramienta</h2>
                </div>
                <div className="mx-2 md:w-full">
                    <img src="https://cdn.shopify.com/s/files/1/2785/0670/products/prisma_sq_0000s_0004_Capa-17_5000x.png?v=1670353873"/>
                    <h2 className="font-bold mt-2 text-lg text-center text-white">Mantenimiento</h2>
                </div>
            </div>
        </div>
    )
};

export default ProductSection;
