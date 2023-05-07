/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductPhotos = () => {
    return (
        <div className="flex flex-col-reverse">
            <div className="mt-6 block max-w-none w-full">
                <div className="grid grid-cols-4 gap-6">
                    <button className="font-medium text-sm justify-center rounded-md cursor-pointer h-24 flex relative uppercase">
                        <span className="rounded-md overflow-hidden inset-0 absolute">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
                                alt=""
                                className="object-center object-cover w-full h-full" />
                        </span>
                        <span className="ring-2 ring-blue-500 ring-opacity-100 ring-offset-2 inset-0 absolute pointer-events-none rounded-md" />
                    </button>
                    <button className="font-medium text-sm justify-center rounded-md cursor-pointer h-24 flex relative uppercase">
                        <span className="rounded-md overflow-hidden inset-0 absolute">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg"
                                alt=""
                                className="object-center object-cover w-full h-full" />
                        </span>
                    </button>
                    <button className="font-medium text-sm justify-center rounded-md cursor-pointer h-24 flex relative uppercase">
                        <span className="rounded-md overflow-hidden inset-0 absolute">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg"
                                alt=""
                                className="object-center object-cover w-full h-full" />
                        </span>
                    </button>
                    <button className="font-medium text-sm justify-center rounded-md cursor-pointer h-24 flex relative uppercase">
                        <span className="rounded-md overflow-hidden inset-0 absolute">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg"
                                alt=""
                                className="object-center object-cover w-full h-full" />
                        </span>
                    </button>
                </div>
            </div>
            <img
                width={"100%"}
                alt="Product photo"
                src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg">
            </img>
        </div>
    )
}

export default ProductPhotos;