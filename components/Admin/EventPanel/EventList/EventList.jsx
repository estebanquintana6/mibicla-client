import React, { useState } from "react";
import swal from "sweetalert";

import EventCard from "@admin_components/EventPanel/EventList/EventCard";
import axios from "@utils/axios";

const EventList = ({ eventList }) => {
    const [events, setEvents] = useState(eventList);

    const getEvents = async () => {
        const { data } = await axios.get('/events');
        setEvents(data);
    }

    const deleteEvent = (id) => {
        swal({
            title: "¿Estás seguro de querer eliminar este evento?",
            text: "Esta acción no es reversible",
            icon: "warning",
            buttons: [
                "Cancelar",
                "Eliminar"
            ],
            dangerMode: true,
        }).then(async (confirm) => {
            if (confirm) {
                await axios.delete(`/events/delete/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem("user")
                    }
                });
                await getEvents();
            }
        })

    }

    const eventCards = events.map((event) =>
        <EventCard
            key={event._id}
            updateEvents={getEvents}
            deleteEvent={deleteEvent.bind(null, event._id)}
            event={event} />);

    return (
        <section className="bg-white min-h-[80vh]">
            <div className={`grid justify-center grid-cols-1 py-6`}>
                {eventCards}
            </div>
        </section>
    )
}

export default EventList;