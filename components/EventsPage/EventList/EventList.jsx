import React from "react";

import EventCard from "@components/EventsPage/EventCard";

const EventList = ({ eventList, admin }) => {

    const gridDisplay = admin ?
        "xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" :
        "xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

    return (
        <section className="bg-white py-6">
            <div className={`grid justify-center ${gridDisplay}`}>
                {eventList.map((event) => 
                    <EventCard key={event._id}  {...event} />
                )}
            </div>
        </section>
    )
}

export default EventList;