import React from "react";

import EventCard from "@components/EventsPage/EventCard";
import RegisterModal from '@components/EventsPage/NewEventModal';

const EventList = ({ eventList, setEventList }) => {
    return (
        <section className="bg-white py-6">
            <RegisterModal 
                setEventList={setEventList} 
                eventList={eventList}/>
            <div className="grid justify-center xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {eventList.map((event) => 
                    <EventCard key={event._id}  {...event} />
                )}
            </div>
        </section>
    )
}

export default EventList;