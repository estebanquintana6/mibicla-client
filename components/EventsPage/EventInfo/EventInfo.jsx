import React, { useState } from 'react';

import Button from '@components/BasicElements/Button';

import PlaceIcon from '@mui/icons-material/Place';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import WarningIcon from '@mui/icons-material/Warning';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

    const EventInfo = ({}) => {
        
    return (
      <div className='p-[36px] bg-zinc-50'>
            <h1 className=" text-5xl mt-3 font-extrabold tracking-tight md:text-5xl lg:text-6xl text-black text-center"> Festival Trail en la Laguna</h1>    
            <div className="flex justify-center">
                    <div className="flex self-auto m-5 items-center">
                        <PlaceIcon className="w=2/5 ml-3 mr-1" sx={{color:"#CE1212"}} fontSize="large"></PlaceIcon>
                        <h1 className="text-lg font-semibold tracking-tight"> lagunas de servin </h1>
                    </div>
                    <div className="flex self-auto items-center">
                        <CalendarTodayIcon className="w=2/5 ml-3 mr-1" sx={{color:"#CE1212"}} fontSize="large"/>
                        <h1 className="text-lg font-semibold tracking-tight"> 26/01/2023 </h1>
                    </div>
                    <div className="flex items-center self-auto">
                        <DirectionsRunIcon className="w=2/5 ml-3 mr-1" sx={{color:"#CE1212"}} fontSize="large"/>
                        <h1 className="text-lg font-semibold tracking-tight proportional-nums"> 20KM </h1>
                    </div>
                    <div className="flex items-center self-auto">
                        <DirectionsBikeIcon className="w=2/5 ml-3 mr-1" sx={{color:"#CE1212"}} fontSize="large"/>
                        <h1 className="text-lg font-semibold tracking-tight proportional-nums"> 40KM </h1>
                    </div>
            </div>
            
            <div className='flex justify-center'>
                <div className="flex">
                        <div className="flex-row p-3 m-3 baisis-1/2">
                            <h2 className='text-4xl font-extrabold text-center mb-1 text-primary '>Detalles</h2>
                            <div className="flex mb-1">
                                <h2 className='text-lg font-bold text-left mr-2'>Inicio: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center'> hasj eugfsk udjsh </h2>
                            </div>
                            <div className="flex mb-1">
                                <h2 className='text-lg font-bold text-left mr-2'>Meta: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center'> hasj eugfsk udjsh </h2>
                            </div>
                            <div className="flex mb-1">
                                <h2 className='text-lg font-bold text-left mr-2'>Distancia: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center'> 40KM </h2>
                            </div>
                            <div className="flex mb-1">
                                <h2 className='text-lg font-bold text-left mr-2'>Dificultad: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center'> Principiante </h2>
                            </div>
                            <div className="flex mb-1">
                                <h2 className='text-lg font-bold text-left mr-2'>Hora de inicio: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center'> 8:00 </h2>
                            </div>
                            <div className="flex mb-1">
                                <h2 className='text-lg font-bold text-left mr-2'>Costo: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center'> $250 </h2>
                            </div>
                            <div className="flex-row mb-1">
                                <h2 className='text-lg font-bold text-left mr-2'>Otra Información: </h2>
                                <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify proportional-nums self-center'> Recomendamos llevar tu hidratacion </h2>
                            </div>
                            <div className="flex">
                                <Button small fill className="m-3 ml-auto mr-auto">Registrarme</Button>
                            </div>
                            <div className="flex self-auto ">
                                    <FacebookIcon className="w=2/5 ml-auto mr-auto m-0"  sx={{color:"#CE1212"}} fontSize="large"/>
                                    <InstagramIcon className="w=2/5 ml-auto mr-auto m-0"  sx={{color:"#CE1212"}} fontSize="large"/>
                            </div>
                            
                            <div>
                                
                            </div>
                        </div>

                        <div className='basis-1/2 flex-row p-5 mt-4'>
                            <div className="flex-row mb-1">
                                <h2 className='text-lg font-extrabold text-center mb-1 text-primary '></h2>
                                <img className="m-3 h-80 ml-auto mr-auto"src='https://www.diariodequeretaro.com.mx/local/4wnbr1-la-belleza-del-bosque-de-la-laguna-de-servin-sera-el-escenario-natural-de-esta-carrera-atletica..jpg/ALTERNATES/LANDSCAPE_1140/La%20belleza%20del%20bosque%20de%20La%20Laguna%20de%20Serv%C3%ADn%20ser%C3%A1%20el%20escenario%20natural%20de%20esta%20carrera%20atl%C3%A9tica..jpg'/>
                            </div>    
                            <div className="flex-row mb-1">
                                <h2 className='text-lg font-extrabold text-center mb-1 text-primary '> JERSEY Y BANDANA DEL EVENTO </h2>
                                <img className="m-3 h-80 ml-auto mr-auto"src='https://t4.ftcdn.net/jpg/03/72/95/07/360_F_372950757_kuUQoT3hzQEEPgV54CCLSCFMUYBwAoik.jpg'/>
                            </div>                        

                        </div>
                        
                        <div className="bg-stone-100 h-fit p-5 m-10 basis-1/4">
                            <h2 className='text-2xl font-bold text-center mb-1 text-black'> Grados de Dificultad</h2>
                            <div className="flex-row items-center self-auto mb-4">
                                <div className="flex items-center self-auto">
                                    <h1 className="text-lg font-semibold tracking-tight proportional-nums ml-0 "> Principiante </h1>
                                    <ThumbUpAltIcon className="ml-auto" sx={{color:"#32CD32"}} fontSize="large"/>
                                </div>
                                <h2 className='text-base font-normal tracking-tighter leading-tight text-justify'> Adecuado para cualquiera que disfrute de una vida razonablemente activa. El ritmo es suave y el terreno plano a ondulado. Distancias cortas </h2>
                            </div>

                            <div className="flex-row items-center self-auto mb-4">
                                <div className="flex items-center self-auto">
                                    <h1 className="text-lg font-semibold tracking-tight proportional-nums ml-0"> Intermedio </h1>
                                    <PriorityHighIcon className="ml-auto" sx={{color:"#FFAC1C"}} fontSize="large"/>
                                </div>
                                <h2 className='text-base font-normal tracking-tighter leading-tight text-justify'> Adecuado para aquellos con más experiencia en ciclismo. El terreno puede ser un poco más montañoso, tener algunas colinas desafiantes. Largas distancias. </h2>
                            </div>

                            <div className="flex-row items-center self-auto mb-4">
                                <div className="flex items-center self-auto">
                                    <h1 className="text-lg font-semibold tracking-tight proportional-nums ml-0"> Avanzado </h1>
                                    <WarningIcon className="ml-auto" sx={{color:"#ED1B1B"}} fontSize="large"/>
                                </div>
                                <h2 className='text-base font-normal tracking-tighter leading-tight text-justify'> Estas rutas requieren un buen nivel de condición física y resistencia. Cuentan con pendientes desafiantes y terrenos dificiles. Largas distancias </h2>
                            </div>
                        </div>
                </div>
            </div>

            
            
         </div>
      )
}

export default EventInfo; 