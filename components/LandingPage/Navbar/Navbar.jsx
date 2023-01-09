import React from 'react';

import Image from 'next/image';

const Navbar = () => {
    return (
        <header className="sticky top-0 bg-white text-center w-full px-2 py-4 z-50">
            <div className="items-center justify-between mx-auto max-w-7xl">
                <div className="items-center space-x-1">
                    <ul className="hidden space-x-2 md:inline-flex">
                    <li className="flex flex-row justify-center">
                        <a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Home</a>
                    </li>
                    <li className="flex flex-row justify-center">
                        <a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Tienda</a>
                    </li>
                    <li className="flex flex-row justify-center">
                        <a href="#"><span className="text-2xl font-extrabold text-blue-600"><Image src={"/simple_logo_red.svg"} width="65" height={"30"} /></span></a>
                    </li>
                    <li className="flex flex-row justify-center">
                        <a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Servicios</a>
                    </li>
                    <li className="flex flex-row justify-center">
                        <a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Contáctanos</a>
                    </li>
                    </ul>
                    <div className="inline-flex md:hidden" x-data="{ open: false }">
                    <button className="flex-none px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                        </svg>
                        <span className="sr-only">Open Menu</span>
                    </button>
                    <div
                        className="absolute top-0 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow" x-cloak="true">
                        <button className="self-end flex-none px-2 ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="sr-only">Close Menu</span>
                        </button>
                        <ul className="space-y-2">
                        <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Home</a></li>
                        <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Blogs</a></li>
                        <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">About Us</a></li>
                        <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Contact Us</a></li>

                        </ul>
                    </div>
                    </div>
                </div>
            </div>      
        </header>
    )
}

export default Navbar;