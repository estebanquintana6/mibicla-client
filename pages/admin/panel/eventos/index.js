import Head from 'next/head';

import EventPanel from '@components/Admin/EventPanel';
import Sidebar from "@components/Admin/Sidebar";

import axios from "@utils/axios";

export default function PanelEventos({ events }) {
    return (
        <>
            <Head>
                <title>Admin - Mi Bicla</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/simple_logo_red.svg" />
            </Head>
            <Sidebar></Sidebar>
            <EventPanel events={events}></EventPanel>
        </>
    )
}

export async function getServerSideProps() {
    const { data } = await axios.get('/events');
    return {
        props: {
            events: data
        }
    }
}