/* eslint-disable @next/next/no-img-element */
import React from "react";

import { TrashIcon, PencilIcon } from "@heroicons/react/20/solid";

import Link from "next/link";

const Product = ({ name, imgUrl }) => {
    return (
        <div
            className="grid grid-cols-6 border-t border-stroke py-4 px-4 sm:grid-cols-8 md:px-6 2xl:px-7.5 bg-gray-800 border-gray-700">
            <div className="xs:col-span-2 lg:col-span-4 flex items-center overflow-hidden">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="h-12 w-12 rounded-md">
                        <img src={imgUrl} alt="Product" />
                    </div>
                    <p className="font-medium text-sm text-white">{name}</p>
                </div>
            </div>
            <div className="col-span-1 hidden items-center sm:flex">
                <p className="font-medium text-sm text-white">Electronics</p>
            </div>
            <div className="col-span-1 flex items-center">
                <p className="font-medium text-sm text-white">$269</p>
            </div>
            <div className="col-span-1 flex items-center">
                <p className="font-medium text-sm text-white">Lazer</p>
            </div>
            <div className="xs:col-span-2 lg:col-span-1 flex items-center mx-auto">
                <div className="grid grid-cols-2 gap-2">
                    <button
                        className="w-full bg-transparent mx-2 hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-600 hover:border-transparent rounded"
                        onClick={() => { }}>
                        <PencilIcon className="inline h-[20px]" />
                    </button>
                    <button
                        className="w-full bg-transparent mx-2 hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded"
                        onClick={() => { }}>
                        <TrashIcon className="inline h-[20px]" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product;