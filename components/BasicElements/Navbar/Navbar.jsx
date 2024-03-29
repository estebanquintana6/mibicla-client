import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { setToken } from "@store/userReducer";
import { useDispatch, useSelector } from 'react-redux';
import { getSession } from "api/session";

import axios from "@utils/axios";

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.token);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(localStorage.getItem("user")) {
            dispatch(setToken(localStorage.getItem("user")));
        }

        getSession()
            .then(() => {
            })
            .catch(() => {
                localStorage.removeItem("user");
            });
    }, [])

    const openMenu = (e) => {
        e.preventDefault();
        setOpen(true);
    }

    const closeMenu = (e) => {
        e.preventDefault();
        setOpen(false);
    }

    const logOut = () => {
        localStorage.removeItem("user");
        axios.defaults.headers.common['Authorization'] = null;
        dispatch(setToken(null));
    }

    return (
        <header className="sticky top-0 bg-blueish text-center w-full px-2 py-4 z-50">
            <div className="items-center justify-between mx-auto max-w-7xl">
                <div className="items-center space-x-1">
                    <ul className="hidden space-x-2 md:inline-flex">
                        { user &&
                            <li className="flex flex-row justify-center">
                                <Link href="/admin" className="px-4 py-2 font-semibold text-tertiary rounded">Panel de admin</Link>
                            </li>
                        }
                        <li className="flex flex-row justify-center">
                            <Link href="/" className="px-4 py-2 font-semibold text-tertiary rounded">Home</Link>
                        </li>
                        <li className="flex flex-row justify-center">
                            <Link href="/inventario" className="px-4 py-2 font-semibold text-tertiary rounded">Inventario</Link>
                        </li>
                        <li className="flex flex-row justify-center">
                            <a href="#">
                                <span className="text-2xl font-extrabold text-blue-600">
                                    <Image alt="logo" src={"/simple_logo_red.svg"} width="65" height={"30"} />
                                </span>
                            </a>
                        </li>
                        <li className="flex flex-row justify-center">
                            <Link href="/eventos" className="px-4 py-2 font-semibold text-tertiary rounded">Eventos</Link>
                        </li>
                        <li className="flex flex-row justify-center">
                            <Link href="/#contactanos" className="px-4 py-2 font-semibold text-tertiary rounded">Contáctanos</Link>
                        </li>
                        { user &&
                            <li className="flex flex-row justify-center">
                                <Link href="#" onClick={logOut} className="px-4 py-2 font-semibold text-primary rounded">Cerrar sesión</Link>
                            </li>
                        }
                    </ul>
                    <div className="inline-flex md:hidden">
                        <button className="flex-none px-2" onClick={openMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                            </svg>
                            <span className="sr-only">Open Menu</span>
                        </button>
                        {open && 
                            <div
                            className="absolute top-0 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-blueish rounded shadow" x-cloak="true">
                                <button className="self-end flex-none px-2 ml-2" onClick={closeMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                        stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="sr-only">Close Menu</span>
                                </button>
                                <ul className="space-y-2">
                                    { user &&
                                        <li>
                                            <Link href="/admin" className="px-4 py-2 font-semibold text-tertiary rounded">Panel de admin</Link>
                                        </li>
                                    }
                                    <li>
                                        <Link href="/" className="px-4 py-2 font-semibold text-white rounded">Home</Link>
                                    </li>
                                    <li><Link href="/inventario" className="px-4 py-2 font-semibold text-white rounded">Inventario</Link></li>
                                    <li><Link href="/eventos" className="px-4 py-2 font-semibold text-white rounded">Eventos</Link></li>
                                    <li><Link href="/#contactanos" className="px-4 py-2 font-semibold text-white rounded">Contáctanos</Link></li>
                                    { user &&
                                        <li>
                                            <Link href="#" onClick={logOut} className="px-4 py-2 font-semibold text-primary rounded">Cerrar sesión</Link>
                                        </li>
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>      
        </header>
    )
}

export default Navbar;