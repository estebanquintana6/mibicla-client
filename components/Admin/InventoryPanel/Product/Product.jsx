/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";

const Product = ({ name, imgUrl }) => {
    return (
        <div className="group relative text-sm">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img src={imgUrl} className="object-cover object-center" />
            </div>
            <Link href="/tienda/producto/1" className="mt-6 block font-medium text-gray-900">
                <span className="absolute inset-0" aria-hidden="true"></span>
                {name}
            </Link>
            <p aria-hidden="true" className="mt-1">Shop now</p>
        </div>
    )
}

export default Product;