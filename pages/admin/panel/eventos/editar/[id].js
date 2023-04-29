import Head from 'next/head';

import Sidebar from "@components/Admin/Sidebar";
import EditEvent from '@components/Admin/EventPanel/EditEvent/EditEvent';

import axios from "@utils/axios";

export default function EditarEvento({ event }) {
    return (
        <>
            <Head>
                <title>Admin - Nuevo evento</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/simple_logo_red.svg" />
            </Head>
            <main>
                <Sidebar />
                <EditEvent event={event}></EditEvent>
            </main>
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