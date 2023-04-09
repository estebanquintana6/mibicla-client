import React from "react";
import Link from 'next/link';

import { getFile } from "@utils/files";

const EventCard = ({
    _id,
    name,
    date,
    distance,
    place,
    posterUrl,
    tags,
}) => {
    const dateFormatOptions = { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric' 
    };

    const raceDateObj = new Date(date);
    const localeDateString = raceDateObj.toLocaleDateString("es-MX", dateFormatOptions);


    return (
        <div className="flex justify-center">
            <div className="max-w-xs rounded-xl overflow-hidden shadow-lg sm:mx-4 my-4 bg-white" key={_id}>
                <img className="w-full h-64" src={getFile(posterUrl)} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        {localeDateString}
                    </p>
                    <p className="text-gray-700 text-base">
                        Lugar: {place}
                    </p>
                    <p className="text-gray-700 text-base">
                        Distancia: {distance}
                    </p>
                </div>
                <Link href={`/eventos/${_id}`} className="innline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-tertiary ml-5 mb-2" >Inscripción</Link>
                <div className="mx-2">
                    <hr className="mx-auto w-100 h-1 bg-primary rounded border-0 md:my-4" />
                </div>
                <div className="px-6 pt-4 pb-2">
                    {tags.map((tag) => 
                        <span key={`${_id}-${tag}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EventCard;