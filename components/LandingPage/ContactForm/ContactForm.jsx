import React from "react";

import Button from "@components/BasicElements/Button";

const ContactForm = () => {
    return (
        <section className="h-screen bg-gradient-to-r from-gray-800 to-black xs:px-0 xs:pt-[36px] md:p-[36px] flex">
            <div className="xs:mx-0 xs:my-auto md:mx-auto md:my-auto bg-black bg-opacity-70 xs:px-4 xs:py-16 md:p-4 rounded-xl xs:w-full md:w-2/5">
                <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none text-white text-center md:text-5xl lg:text-6xl">Contáctanos</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" for="username">
                            Nombre
                        </label>
                        <input className="block mb-2 text-sm font-medium shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" for="password">
                            Correo electrónico
                        </label>
                        <input className="block text-sm font-medium shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="ejemplo@gmail.com" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" for="message">
                            Mensaje
                        </label>
                        <textarea className="block text-sm font-medium shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Mensaje"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <Button className="mx-auto">Mandar mensaje</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm;