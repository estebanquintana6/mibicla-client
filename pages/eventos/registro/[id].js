import Head from 'next/head';
import Navbar from '@components/BasicElements/Navbar';
import EventRegister from '@components/EventRegister';

import axios from "@utils/axios";

export default function EventosRegistro({ event }) {
    return (
        <>
            <Navbar></Navbar>
            <EventRegister event={event}></EventRegister>
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