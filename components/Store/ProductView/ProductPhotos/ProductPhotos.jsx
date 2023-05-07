/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const ProductPhotos = () => {

    const photos = [
        "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        "https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg",
        "https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg",
        "https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg",
    ];

    const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);

    return (
        <div className="flex flex-col-reverse">
            <div className="mt-6 block max-w-none w-full">
                <div className="grid grid-cols-4 gap-6">
                    {photos.map((photo) =>
                        <button
                            onClick={() => setSelectedPhoto(photo)} 
                            className="font-medium text-sm justify-center rounded-md cursor-pointer h-24 flex relative uppercase" key={photo}>
                            <span className="rounded-md overflow-hidden inset-0 absolute">
                                <img
                                    src={photo}
                                    alt=""
                                    className="object-center object-cover w-full h-full" />
                            </span>
                            {selectedPhoto == photo &&
                                <span className="ring-2 ring-primary ring-opacity-100 ring-offset-2 inset-0 absolute pointer-events-none rounded-md" />
                            }
                        </button>
                    )}
                </div>
            </div>
            <img
                width={"100%"}
                alt="Product photo"
                src={selectedPhoto}>
            </img>
        </div>
    )
}

export default ProductPhotos;