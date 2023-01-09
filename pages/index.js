import Head from 'next/head';
import Header from '../components/LandingPage/Header';
import ServiceSection from '../components/LandingPage/ServiceSection';
import EventCardsSection from '../components/LandingPage/EventCardsSection';
import StoreSection from '../components/LandingPage/JerseySection';

export default function Home({ events }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header></Header>
        <ServiceSection></ServiceSection>
        <StoreSection></StoreSection>
      </main>
    </>
  )
}

export async function getStaticProps() {
  return { 
      props: { 
          events: [{
            id: 1,
            name: "Carrera lagunas",
            date: "14 de Septiembre del 2022",
            desc: "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
            imgUrl: "/events_photos/event_example.png",
            place: "Lagunas de Servín"
          },
          {
            id: 2,
            name: "Carrera lagunas",
            date: "14 de Septiembre del 2022",
            desc: "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
            imgUrl: "/events_photos/event_example.png",
            place: "Lagunas de Servín"
          },
          {
            id: 3,
            name: "Carrera lagunas",
            date: "14 de Septiembre del 2022",
            desc: "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
            imgUrl: "/events_photos/event_example.png",
            place: "Lagunas de Servín"
          }
        ]
      }   
  }
}