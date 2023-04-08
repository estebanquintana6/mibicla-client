import Head from 'next/head';

import AdminPanel from '@components/Admin/AdminPanel';

export default function Admin() {
    return (
        <>
            <Head>
                <title>Admin - Mi Bicla</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/simple_logo_red.svg" />
            </Head>
            <AdminPanel></AdminPanel>
        </>
    )
}