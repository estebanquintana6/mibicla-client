import Head from 'next/head';

import Register from '@components/AuthComponents/Register';

export default function Registro() {
    return (
        <>
            <Head>
                <title>Mi Bicla</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/simple_logo_red.svg" />
            </Head>
            <Register></Register>
        </>
    )
}