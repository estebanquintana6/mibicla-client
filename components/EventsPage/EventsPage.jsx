import React, { useState } from "react";

import EventList from '@components/EventsPage/EventList';
import AdminSectionTitle from "@components/BasicElements/AdminSectionTitle";

const EventsPage = ({ events }) => {
    const [eventList, _] = useState(events);
    return (
        <section className="p-5">
            <AdminSectionTitle title={"Próximos eventos"} />
            <EventList eventList={eventList}></EventList>
        </section>
    )
}

export default EventsPage;