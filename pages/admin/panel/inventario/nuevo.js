import Head from 'next/head';

import Sidebar from "@components/Admin/Sidebar";

export default function NuevoProducto() {
    return (
      <>
        <Head>
          <title>Admin - Nuevo producto</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/simple_logo_red.svg" />
        </Head>
        <main>
            <Sidebar />
        </main>
      </>
    )
  }