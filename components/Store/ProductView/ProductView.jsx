import React from "react";

import ProductPhotos from "./ProductPhotos";

const ProductView = ({ product }) => {
    return (
        <section className="px-28 py-16 max-w-7xl">
            <div className="grid grid-cols-2 gap-x-8 items-start">
                <ProductPhotos />
                <div>
                    <h1 className="text-4xl font-extrabold">Tote bag</h1>
                    <div className="mt-3">
                    <p className="tracking-tight text-3xl">$140</p>
                    </div>
                    <div className="mt-6 text-base text-slate-600">
                        <p>
                            The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductView;