import React from "react";

const EventList = ({ events }) => {
    return (
        <section>
            {events.map(({_id, name, date}) => 
                <div key={_id}>
                    <h5>{name} - {date}</h5>
                </div>
            )}
        </section>
    )
}

export default EventList;