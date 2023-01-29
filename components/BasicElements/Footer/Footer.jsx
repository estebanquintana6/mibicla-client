import React from "react";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-center">
                <Image alt="logo" src={"/simple_logo_red.svg"} width="65" height={"30"} className="h-8 mr-3" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mi Bicla</span>
                { /* <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            */ }
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Mi Bicla™</a>. Todos los derechos reservados.
            </span>
        </footer>
    )
}

export default Footer;