import React from "react";

import { useRouter } from 'next/router'

import Button from "@components/BasicElements/Button";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactForm = () => {
    const router = useRouter()
    
    const goToWhats = (e) => {
        e.preventDefault();
        router.push('https://api.whatsapp.com/send?phone=5214428306394&text=Hola,%20quisiera%20conocer%20más%20sobre%20tus%20productos');
    }

    const goToFb = (e) => {
        e.preventDefault();
        router.push('https://www.facebook.com/MiBiclaQueretaro/');
    }

    const goToIg = (e) => {
        e.preventDefault();
        router.push('https://www.instagram.com/mibiclaqro/');
    }

    return (
        <section id="contactanos" className="h-screen bg-gradient-to-r from-gray-800 to-black xs:px-0 xs:pt-[36px] md:p-[36px] flex">
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
                    <div className="flex items-center justify-between p-2">
                        <FacebookIcon onClick={goToFb} className="w=2/5 ml-auto mr-auto m-0"  sx={{color:"#CE1212"}} fontSize="large"/>
                        <WhatsAppIcon onClick={goToWhats} className="w=2/5 ml-auto mr-auto m-0"  sx={{color:"#CE1212"}} fontSize="large"/>
                        <InstagramIcon onClick={goToIg} className="w=2/5 ml-auto mr-auto m-0"  sx={{color:"#CE1212"}} fontSize="large"/>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm;