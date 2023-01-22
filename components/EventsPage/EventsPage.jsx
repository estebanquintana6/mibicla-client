import React, { useState } from "react";

import RegisterModal from '@components/EventsPage/RegisterModal';
import EventList from '@components/EventsPage/EventList';

const EventsPage = ({ events }) => {
    const [eventList, setEventList] = useState(events);

    return (
        <div>
            <RegisterModal 
                setEventList={setEventList} 
                eventList={eventList}/>
            <EventList events={eventList}></EventList>
        </div>
    )
}

export default EventsPage;