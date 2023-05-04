import React from "react";

import Router from 'next/router';

import { PlusIcon } from "@heroicons/react/20/solid";

import EventList from "@admin_components/EventPanel/EventList";
import AdminSectionTitle from "@admin_components/Shared/AdminSectionTitle";
import ActionBar from "@admin_components/Shared/ActionBar";

import Button from "@components/BasicElements/Button";


const EventPanel = ({ events }) => {

    const toNewEventPage = () => {
        Router.push('/admin/panel/eventos/nuevo');
    }

    return (
        <section className="sm:ml-64 p-5">
            <AdminSectionTitle title={"Eventos"}/>
            <ActionBar>
                <Button small fill onClick={toNewEventPage}>
                    <div className="flex align-middle">
                        <PlusIcon className="inline h-[20px] my-auto mr-1" />
                        Nuevo evento
                    </div>
                </Button>
            </ActionBar>

            <EventList eventList={events} admin />
        </section>
    );
}

export default EventPanel;