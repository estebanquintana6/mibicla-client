import React from "react";

import Image from 'next/image';

import EventCard from "@components/EventsPage/EventCard";

const EventList = ({ eventList, admin }) => {

    const gridDisplay = admin ?
        "xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" :
        "h-full xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

    const eventCards = eventList.map((event) =>
        <EventCard key={event._id}  {...event} />);

    return (
        <section className="bg-white min-h-[80vh]">
            {(eventList.length > 0 || admin) ?
                <div className={`grid justify-center ${gridDisplay} py-6`}>
                    {eventCards}
                </div> :
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-2/4 flex xs:flex-col md:flex-row xs:w-full md:w-auto">
                <Image
                    alt="logo"
                    src={"/no_events.svg"}
                    width={300}
                    height={300}
                    className="mx-auto mb-3"
                />
                <h1 className="xs:text-xl md:text-3xl font-bold leading-tight tracking-tight text-gray-900 mx-auto text-center">
                    No hay eventos por el momento. <br/><span class="text-primary">Estamos trabajando para traer las mejores carreras.</span>
                </h1>
            </div>
            }
        </section>
    )
}

export default EventList;