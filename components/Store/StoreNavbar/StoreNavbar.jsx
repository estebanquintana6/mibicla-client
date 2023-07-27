import React from 'react';
import Image from 'next/image';

const StoreNavbar = () => {
    return (
        <section className="bg-gray-900 p-4 block">
            <nav className="border-gray-700">
                <div className="flex flex-wrap items-center justify-between p-4">
                    <a href="#" className="flex items-center">
                        <Image alt="logo" src={"/simple_logo_red.svg"} width="65" height={"50"} className="h-8 mr-3" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Mi Bicla</span>
                    </a>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 rounded md:text-blue-700 md:p-0 text-blue-500 bg-blue-600 md:bg-transparent" aria-current="page">Home</a>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 rounded md:border-0 md:p-0 md:w-auto text-white md:hover:text-blue-500 focus:text-white border-gray-700 hover:bg-gray-700 md:hover:bg-transparent">Ropa<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                <div id="dropdownNavbar" className="z-10 hidden font-normal divide-yrounded-lg shadow w-44 bg-gray-700 divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-400 hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-toggle="dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4 rounded md:border-0 md:p-0 md:w-auto text-white md:hover:text-blue-500 focus:text-white border-gray-700 hover:bg-gray-700 md:hover:bg-transparent">Refacciones<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                <div id="dropdown" className="z-10 hidden font-normal divide-yrounded-lg shadow w-44 bg-gray-700 divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-400 hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                            <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-white hover:text-gray-700">
                                <a href="#" role="button" className="relative flex">
                                    <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                                        <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                                    </svg>
                                    <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                                        5 { /* Number of products in cart */}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default StoreNavbar;