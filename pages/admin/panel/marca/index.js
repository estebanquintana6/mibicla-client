import Head from 'next/head';

import Sidebar from "@components/Admin/Sidebar";
import BrandPanel from '@admin_components/BrandPanel';

import axios from "@utils/axios";

export default function Marcas({ brands }) {
    return (
        <>
            <Head>
                <title>Admin - Marcas</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/simple_logo_red.svg" />
            </Head>
            <main>
                <Sidebar />
                <BrandPanel brands={brands} />
            </main>
        </>
    )
}

export async function getServerSideProps() {
    const { data } = await axios.get('/brands');
    return {
        props: {
            brands: data
        }
    }
}