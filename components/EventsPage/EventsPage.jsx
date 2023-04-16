import React, { useState } from "react";

import EventList from '@components/EventsPage/EventList';
import AdminSectionTitle from "@components/BasicElements/AdminSectionTitle";

const EventsPage = ({ events }) => {
    const [eventList, _] = useState(events);
    return (
        <section className="p-5">
            <AdminSectionTitle title={"Próximos eventos"} />
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
            <EventList eventList={eventList}></EventList>
        </section>
    )
}

export default EventsPage;