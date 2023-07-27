import Head from 'next/head';
import Navbar from '@components/BasicElements/Navbar';
import Footer from '@components/BasicElements/Footer';

import ProductView from '@components/Store/ProductView/ProductView';

export default function Producto({ product }) {
  return (
    <>
      <Head>
        <title>Mi Bicla - Producto</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/simple_logo_red.svg" />
      </Head>
      <main>
        <Navbar></Navbar>
        <ProductView />
        <Footer></Footer>
      </main>
    </>
  )
}