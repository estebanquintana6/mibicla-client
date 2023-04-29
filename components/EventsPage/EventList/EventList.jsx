import React from "react";

import Image from 'next/image';

import EventCard from "@components/EventsPage/EventCard";
import { useIsMobile } from "@utils/isMobile";

const EventList = ({ eventList, admin }) => {
    const isMobile = useIsMobile();

    const gridDisplay = admin ?
        "xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" :
        "h-full xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

    const eventCards = eventList.map((event) =>
        <EventCard key={event._id}  {...event} />);

    return (
        <section className="bg-white min-h-[80vh]">
            {(eventList.length > 0 || admin) ?
                <>
                    <div className="px-5 pt-4 pb-1 mt-3">
                        <h1 className="align-middle mb-4 md:text-lg font-extrabold tracking-tight leading-none text-gray-700 text-center">
                            Cada carrera es una oportunidad para desafiarte a ti mismo y superar tus propios límites. <br />
                        </h1>
                        <h1 className="align-middle mb-4 md:text-lg font-extrabold tracking-tight leading-none text-gray-700 text-center">
                            Inscríbete en nuestras rodadas. No te arrepentirás.
                        </h1>
                        <h1 className="align-middle mb-4 md:text-xl font-extrabold tracking-tight leading-none text-primary text-center">
                            ¡Nos vemos en la línea de salida!</h1>
                    </div>
                    <div className={`grid justify-center ${gridDisplay} py-6`}>
                        {eventCards}
                    </div>
                </> :
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-2/4 flex xs:flex-col md:flex-row xs:w-full md:w-auto">
                    <Image
                        alt="logo"
                        src={`${isMobile ? "/no_events.svg" : "/no_events_desktop.svg"}`}
                        width={300}
                        height={300}
                        className="xs:mx-auto md:mr-6 mb-3"
                    />
                    <h1 className="xs:text-xl md:text-3xl font-bold leading-tight tracking-tight text-gray-900 mx-auto md:my-auto text-center">
                        No hay eventos por el momento. <br /><span class="text-primary">Estamos trabajando para traer las mejores carreras.</span>
                    </h1>
                </div>
            }
        </section>
    )
}

export default EventList;