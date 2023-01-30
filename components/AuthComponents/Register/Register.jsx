import React, { useState } from "react";

import Image from 'next/image';

const Register = () => {
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false,
    });

    const formHandle = (e) => {
        e.preventDefault();
        console.log("here");
    }

    const errorBorder = (err) => err ? "border-red-500" : "border-gray-600";

    return (
        <section className="bg-gray-900 h-screen">
        <div className="flex flex-col items-center justify-center px-6 xs:py-[3rem] sm:py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
                <Image alt="logo" src={"/simple_logo_red.svg"} width="65" height={"50"} />
            </a>
            <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Crea una cuenta
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={formHandle}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Tu nombre</label>
                            <input type="name" name="name" id="name" className={`border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 ${errorBorder(errors.name)}`} placeholder="Juan Pérez" required="" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Tu email</label>
                            <input type="email" name="email" id="email" className={`border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 ${errorBorder(errors.email)}`} placeholder="name@gmail.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Contraseña</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className={`border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 ${errorBorder(errors.password)}`} required="" />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">Confirma tu contraseña</label>
                            <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className={`border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 ${errorBorder(errors.password)}`} required="" />
                        </div>
                        <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Create an account</button>
                        <p className="text-sm font-light text-gray-400">
                            Already have an account? <a href="#" className="font-medium hover:underline text-primary-500">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Register;