import React, { useState } from 'react';

import Button from '@components/BasicElements/Button';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { useRouter } from 'next/router'

import DifficultySection from './DifficultySection';

import styles from "./EventInfo.module.css";

const EventInfo = ({ event }) => {
    const router = useRouter();

    const {
        name,
        date,
        price
    } = event;


    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = new Date(date).toLocaleDateString("es-MX", dateOptions);

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
        <section>
            <div className={`${styles["resources-section"]} p-4 h-screen`}>
                <div className="md:w-2/5 w-full md:bg-black md:bg-opacity-70 rounded-xl md:backdrop-blur-sm">
                    <div className="rounded-xl p-10 pt-60">
                        <hr className="my-4 mx-auto w-100 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-tertiary" />
                        <h1 className="align-middle mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-tertiary">{name}</h1>
                        <h2 className='text-2xl font-extrabold text-center m-3 text-primary tracking-normal '>{dateString}</h2>
                        <div className="flex">
                            <Button small fill className="text-lg font-extrabold text-center text-primary ml-auto mr-auto tracking-wide">Registrarme</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles["resources-section"]} p-4 flex h-screen`}>
                <div className="w-screen md:bg-black md:bg-opacity-70 rounded-xl">
                    <div className="rounded-xl p-5 flex">
                        <div className="flex-row p-5">
                            <h2 className='text-5xl font-extrabold text-center mb-1 text-primary p-5'>Detalles</h2>
                            <div className="flex mb-1">
                                <h2 className='text-lg font-bold text-left mr-2 text-tertiary'>Inicio: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center text-tertiary'> hasj eugfsk udjsh </h2>
                            </div>
                            <div className="flex mb-1">
                                <h2 className='text-lg font-bold text-left mr-2 text-tertiary'>Meta: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center text-tertiary'> hasj eugfsk udjsh </h2>
                            </div>
                            <div className="flex mb-1">
                                <h2 className='text-lg font-bold text-left mr-2 text-tertiary'>Distancia: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center text-tertiary'> 40KM </h2>
                            </div>
                            <div className="flex mb-1">
                                <h2 className='text-lg font-bold text-left mr-2 text-tertiary'>Dificultad: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center text-tertiary'> Principiante </h2>
                            </div>
                            <div className="flex mb-1">
                                <h2 className='text-lg font-bold text-left mr-2 text-tertiary'>Hora de inicio: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center text-tertiary'> 8:00 </h2>
                            </div>
                            <div className="flex mb-1">
                                <h2 className='text-lg font-bold text-left mr-2 text-tertiary'>Costo: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center text-tertiary'>${ price }</h2>
                            </div>
                            <div className="flex-row mb-1">
                                <h2 className='text-lg font-bold text-left mr-2 text-tertiary'>Otra Información: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center text-tertiary'> Recomendamos llevar tu hidratacion </h2>
                            </div>
                            <div className="flex items-center justify-between mt-5">
                                <FacebookIcon onClick={goToFb} className="w=2/5 ml-auto mr-auto m-0" sx={{ color: "#CE1212" }} fontSize="large" />
                                <WhatsAppIcon onClick={goToWhats} className="w=2/5 ml-auto mr-auto m-0" sx={{ color: "#CE1212" }} fontSize="large" />
                                <InstagramIcon onClick={goToIg} className="w=2/5 ml-auto mr-auto m-0" sx={{ color: "#CE1212" }} fontSize="large" />
                            </div>
                        </div>

                        <div className="flex-row mt-5 ml-auto">
                            <h2 className='text-5xl font-extrabold text-center mb-1 text-primary p-5'>Jersey & Bandana</h2>
                            <img className="m-3 h-80 ml-auto mr-auto" src='https://chronosport.mx/imagenes/thumbnails/jersey3.png' />
                        </div>
                    </div>
                </div>
            </div>
            <DifficultySection />
        </section>
    )
}

export default EventInfo; 