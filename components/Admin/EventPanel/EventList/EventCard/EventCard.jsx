import React from "react";
import Link from 'next/link';

import { getFile } from "@utils/files";
import { useIsMobile } from "@utils/isMobile";

const EventCard = ({
    _id,
    name,
    date,
    distance,
    place,
    posterUrl,
}) => {
    const isMobile = useIsMobile();

    const dateFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const raceDateObj = new Date(date);
    const localeDateString = raceDateObj.toLocaleDateString("es-MX", dateFormatOptions);



    const actionButtons = (
        <div className="flex md:mt-3 xs:py-3 xs:mx-auto md:mx-0">
            <button class="bg-transparent mr-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded">
                Registros
            </button>
            <button class="bg-transparent mx-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Editar
            </button>
            <button class="bg-transparent mx-2 hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded">
                Eliminar
            </button>
        </div>
    )

    return (
        <div className="rounded-xl shadow-lg sm:mx-4 my-4 bg-white" key={_id}>
            <div className="flex flex-wrap">
                <div className="flex">
                    <img className="xs:my-auto md:my-0 xs:h-32 md:h-64 xs:w-32 md:w-64 object-cover" src={getFile(posterUrl)} alt="" />
                    <div className="px-6 py-3">
                        <div className="font-bold text-xl mb-2">{name}</div>
                        <p className="text-gray-700 text-base">
                            {localeDateString}
                        </p>
                        <p className="text-gray-700 text-base">
                            {place}
                        </p>
                        <p className="text-gray-700 text-base">
                            Distancia: {distance}
                        </p>
                        {!isMobile && <>{actionButtons}</>}
                    </div>
                </div>
                {isMobile && <>{actionButtons}</>}
            </div>
        </div>
    );
}

export default EventCard;