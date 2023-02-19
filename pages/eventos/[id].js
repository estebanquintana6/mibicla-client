import Head from 'next/head';
import Navbar from '@components/BasicElements/Navbar';
import EventInfo from '@components/EventsPage/EventInfo';




export default function Event(event) {
    return (
        <>
            <Navbar></Navbar>
            <EventInfo></EventInfo>
        </>
    )
}