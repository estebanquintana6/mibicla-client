import Head from 'next/head';

import Navbar from '@components/BasicElements/Navbar';
import Header from '@components/LandingPage/Header';
import ServiceSection from '@components/LandingPage/ServiceSection';
import JerseySection from '@components/LandingPage/JerseySection';
import ProductsSection from '@components/LandingPage/ProductsSection';
import ContactForm from '@components/LandingPage/ContactForm/ContactForm';
import Footer from '@components/BasicElements/Footer';
 
export default function Home({ events }) {
  return (
    <>
      <Head>
        <title>Mi Bicla</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/simple_logo_red.svg" />
      </Head>
      <main>
        <Navbar></Navbar>
        <Header></Header>
        <ServiceSection></ServiceSection>
        <ProductsSection></ProductsSection>
        <JerseySection></JerseySection>
        <ContactForm></ContactForm>
        <Footer></Footer>
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