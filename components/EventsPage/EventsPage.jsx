import React, { useState } from "react";

import EventList from '@components/EventsPage/EventList';

const EventsPage = ({ events }) => {
    const [eventList, _] = useState(events);
    return (
        <div>
            <EventList eventList={eventList}></EventList>
        </div>
    )
}

export default EventsPage;