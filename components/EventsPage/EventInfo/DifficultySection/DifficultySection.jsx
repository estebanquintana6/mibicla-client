import React from "react";

import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import WarningIcon from '@mui/icons-material/Warning';

const DifficultySection = () => {
    return (
        <div className="bg-gradient-to-r from-black to-neutral-900 py-10 px-16">
            <h2 className='text-4xl font-extrabold text-center mb-1 text-primary p-5'>Grados de Dificultad</h2>
            <div className="flex flex-wrap sm:mt-6">
                <div className="flex-row items-center self-auto sm:basis-1/3 xs:mt-6 xs:w-full sm:mt-0 sm:w-1/3 sm:px-4">
                    <div className="flex items-center self-auto">
                        <h1 className="text-2xl font-semibold tracking-tight proportional-nums ml-0 text-tertiary "> Principiante </h1>
                        <ThumbUpAltIcon className="ml-auto" sx={{ color: "#32CD32" }} fontSize="large" />
                    </div>
                    <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify text-tertiary p-2'> Adecuado para cualquiera que disfrute de una vida razonablemente activa. El ritmo es suave y el terreno plano a ondulado. Distancias cortas </h2>
                </div>

                <div className="flex-row items-center self-auto sm:basis-1/3 xs:mt-6 xs:w-full sm:mt-0 sm:w-1/3 sm:px-4">
                    <div className="flex items-center self-auto">
                        <h1 className="text-2xl font-semibold tracking-tight proportional-nums ml-0 text-tertiary"> Intermedio </h1>
                        <PriorityHighIcon className="ml-auto" sx={{ color: "#FFAC1C" }} fontSize="large" />
                    </div>
                    <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify text-tertiary p-2'> Adecuado para aquellos con más experiencia en ciclismo. El terreno puede ser un poco más montañoso, tener algunas colinas desafiantes. Largas distancias. </h2>
                </div>

                <div className="flex-row items-center self-auto sm:basis-1/3 xs:mt-6 xs:w-full sm:mt-0 sm:w-1/3 sm:px-4" >
                    <div className="flex items-center self-auto">
                        <h1 className="text-2xl font-semibold tracking-tight proportional-nums ml-0 text-tertiary"> Avanzado </h1>
                        <WarningIcon className="ml-auto" sx={{ color: "#ED1B1B" }} fontSize="large" />
                    </div>
                    <h2 className='text-lg font-normal tracking-tighter leading-tight text-justify text-tertiary p-2'> Estas rutas requieren un buen nivel de condición física y resistencia. Cuentan con pendientes desafiantes y terrenos dificiles. Largas distancias </h2>
                </div>
            </div>
        </div>
    );
}

export default DifficultySection;