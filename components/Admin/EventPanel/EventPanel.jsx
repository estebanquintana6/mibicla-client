import React from "react";

import Router from 'next/router';

import { PlusIcon } from "@heroicons/react/20/solid";

import EventList from "@admin_components/EventPanel/EventList";

import Button from "@components/BasicElements/Button";
import AdminSectionTitle from "@components/BasicElements/AdminSectionTitle";


const EventPanel = ({ events }) => {

    const toNewEventPage = () => {
        Router.push('/admin/panel/eventos/nuevo');
    }

    return (
        <section className="sm:ml-64 p-5">
            <AdminSectionTitle title={"Eventos"}/>
            <div id="event-actions" className="flex">
                <div className="mt-3 mr-6 ml-auto">
                    <Button small fill onClick={toNewEventPage}>
                        <div className="flex align-middle">
                            <PlusIcon className="inline h-[20px] my-auto mr-1" />
                            Nuevo evento
                        </div>
                    </Button>
                </div>
            </div>

            <EventList eventList={events} admin />
        </section>
    );
}

export default EventPanel;