import Head from 'next/head';
import Navbar from '@components/BasicElements/Navbar';
import EventInfo from '@components/EventsPage/EventInfo';

import axios from "@utils/axios";

export default function Event({ event }) {
    return (
        <>
            <Navbar></Navbar>
            <EventInfo event={event}></EventInfo>
        </>
    )
}

export async function getServerSideProps({ params }) {
    const { id } = params;

    try {
        const { status, data } = await axios.get(`/events/${id}`);


        if (status !== 200) {
            return {
                notFound: true
            }
        }

        return {
            props: {
                event: data
            }
        }
    } catch {
        return {
            notFound: true
        }
    }
}