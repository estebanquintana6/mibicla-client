import Head from 'next/head';

import Sidebar from "@components/Admin/Sidebar";
import CategoryPanel from '@admin_components/CategoryPanel';

import axios from "@utils/axios";

export default function Categorias({ categories }) {
  return (
    <>
      <Head>
        <title>Admin - Categorías</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/simple_logo_red.svg" />
      </Head>
      <main>
        <Sidebar />
        <CategoryPanel categories={categories} />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get('/category');
  return {
    props: {
      categories: data
    }
  }
}