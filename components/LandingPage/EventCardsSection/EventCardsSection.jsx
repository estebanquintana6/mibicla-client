import React from "react";

import EventCard from "./EventCard";

import styles from "./EventCardsSection.module.css";


const EventCardsSection = ({ events }) => {
    return (
        <section className={`${styles['wrapper']}`}>
            { events.map((event) => 
                <EventCard key={`event-${event.id}`} {...event} />)
            }
        </section>
    )
}

export default EventCardsSection;

