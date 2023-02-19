import React from "react";

import EventCard from "@components/EventsPage/EventCard";

const EventList = ({ eventList }) => {
    return (
        <section className="bg-white py-6">
            <div className="grid justify-center xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {eventList.map((event) => 
                    <EventCard key={event._id}  {...event} />
                )}
            </div>
        </section>
    )
}

export default EventList;