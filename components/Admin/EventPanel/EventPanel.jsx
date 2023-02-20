import React from "react";
import EventList from "@components/EventsPage/EventList";

import RegisterModal from "@components/EventsPage/NewEventModal/NewEventModal";

const EventPanel = ({ events }) => {
    return (
        <div className="sm:ml-64">
            <RegisterModal></RegisterModal>
            <EventList eventList={events} admin/>
        </div>
    );
}

export default EventPanel;