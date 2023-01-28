import React, { useState } from "react";

import EventList from '@components/EventsPage/EventList';

const EventsPage = ({ events }) => {
    const [eventList, setEventList] = useState(events);
    return (
        <div>
            <EventList eventList={eventList} setEventList={setEventList}></EventList>
        </div>
    )
}

export default EventsPage;