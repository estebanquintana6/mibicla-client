import React from "react";

import EventCard from "@admin_components/EventPanel/EventList/EventCard";

const EventList = ({ eventList }) => {

    const eventCards = eventList.map((event) =>
        <EventCard key={event._id}  {...event} />);

    return (
        <section className="bg-white min-h-[80vh]">
            <div className={`grid justify-center grid-cols-1 py-6`}>
                {eventCards}
            </div>
        </section>
    )
}

export default EventList;