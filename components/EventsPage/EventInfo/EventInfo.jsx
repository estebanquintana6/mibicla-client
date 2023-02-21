import React, { useState } from 'react';

import Button from '@components/BasicElements/Button';

import styles from "./EventInfo.module.css";

import { useRouter } from 'next/router'

import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import WarningIcon from '@mui/icons-material/Warning';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const EventInfo = ({}) => {
        
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
     <section>

        <div  className={`${styles["resources-section"]} h-screen`}>
                <div className="md:w-2/5 w-full md:bg-black md:bg-opacity-70 rounded-xl md:backdrop-blur-sm">
                    <div className="rounded-xl p-10 pt-60">
                        <hr className="my-4 mx-auto w-100 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-tertiary" />
                        <h1 className="align-middle mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-tertiary">Festival Trail en la Laguna</h1>                       
                        <h2 className='text-2xl font-extrabold text-center m-3 text-primary tracking-normal '> 22 . 02 . 2023</h2>
                        <div className="flex">
                            <Button small fill className="text-lg font-extrabold text-center text-primary ml-auto mr-auto tracking-wide">Registrarme</Button>
                        </div>
                    </div>      
                </div>
        </div>
            
        <div  className={`${styles["resources-section"]} h-screen`}>
                <div className="w-screen md:bg-black md:bg-opacity-70 rounded-xl ">
                    <div className="rounded-xl p-10 flex">
                        <div className=" flex-row h-fit p-5 m-10 basis-1/4">
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
                                    <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center text-tertiary'> $250 </h2>
                                </div>
                                <div className="flex-row mb-1">
                                    <h2 className='text-lg font-bold text-left mr-2 text-tertiary'>Otra Información: </h2>
                                    <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center text-tertiary'> Recomendamos llevar tu hidratacion </h2>
                                </div>
                                <div className="flex items-center justify-between p-2">
                                    <FacebookIcon onClick={goToFb} className="w=2/5 ml-auto mr-auto m-0"  sx={{color:"#CE1212"}} fontSize="large"/>
                                    <WhatsAppIcon onClick={goToWhats} className="w=2/5 ml-auto mr-auto m-0"  sx={{color:"#CE1212"}} fontSize="large"/>
                                    <InstagramIcon onClick={goToIg} className="w=2/5 ml-auto mr-auto m-0"  sx={{color:"#CE1212"}} fontSize="large"/>
                                </div>
                            </div>

                            <div className="basis-1/4">
                            </div>

                            <div className="flex-row p-5 h-fit  m-10 basis-1/2">
                                <h2 className='text-5xl font-extrabold text-center mb-1 text-primary p-5'>Jersey & Bandana</h2>
                                <img className="m-3 h-80 ml-auto mr-auto"src='https://chronosport.mx/imagenes/thumbnails/jersey3.png'/>  
                            </div> 
                    </div>      
                </div>
        </div>

        <div className="bg-gradient-to-r from-black to-neutral-900 p-[36px]">
            <h2 className='text-4xl font-extrabold text-center mb-1 text-primary p-5'>Grados de Dificultad</h2>

            <div className="flex">
                <div className="flex-row items-center self-auto m-4 basis-1/2">
                    <div className="flex items-center self-auto">
                        <h1 className="text-2xl font-semibold tracking-tight proportional-nums ml-0 text-tertiary "> Principiante </h1>
                        <ThumbUpAltIcon className="ml-auto" sx={{color:"#32CD32"}} fontSize="large"/>
                    </div>
                    <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify text-tertiary p-2'> Adecuado para cualquiera que disfrute de una vida razonablemente activa. El ritmo es suave y el terreno plano a ondulado. Distancias cortas </h2>
                </div>

                <div className="flex-row items-center self-auto m-4 basis-1/2">
                    <div className="flex items-center self-auto">
                        <h1 className="text-2xl font-semibold tracking-tight proportional-nums ml-0 text-tertiary"> Intermedio </h1>
                        <PriorityHighIcon className="ml-auto" sx={{color:"#FFAC1C"}} fontSize="large"/>
                    </div>
                    <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify text-tertiary p-2'> Adecuado para aquellos con más experiencia en ciclismo. El terreno puede ser un poco más montañoso, tener algunas colinas desafiantes. Largas distancias. </h2>
                </div>

                <div className="flex-row items-center self-auto m-4 basis-1/2" >
                    <div className="flex items-center self-auto">
                        <h1 className="text-2xl font-semibold tracking-tight proportional-nums ml-0 text-tertiary"> Avanzado </h1>
                        <WarningIcon className="ml-auto" sx={{color:"#ED1B1B"}} fontSize="large"/>
                    </div>
                    <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify text-tertiary p-2'> Estas rutas requieren un buen nivel de condición física y resistencia. Cuentan con pendientes desafiantes y terrenos dificiles. Largas distancias </h2>
                </div>
            </div>
        </div>

        </section>
      )
}

export default EventInfo; 