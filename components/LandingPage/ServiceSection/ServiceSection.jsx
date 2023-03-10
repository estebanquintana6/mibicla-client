import React from "react";

import Button from "@components/BasicElements/Button";

import styles from "./ServiceSection.module.css";

import { useRouter } from 'next/router'

const ServiceSection = () => {

    const router = useRouter()
    
    const goToEvents = (e) => {
        e.preventDefault();
        router.push('/eventos');
    }

    return (
        <section className={`${styles.container} bg-white`}>
            <div className={`${styles.imagediv} xs:bg-[-50px] md:bg-[0px]`}>
            </div>
            <div className={`${styles.descriptionContainer} md:w-2/5 xs:w-full md:left-[60%] xs:left-0 md:bg-black md:bg-opacity-70 rounded-xl md:backdrop-blur-sm`}>
                <hr className="my-4 mx-auto w-100 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-white" />
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Rueda con <span className="text-primary">los #1</span> de Querétaro.</h1>
                <p className="mt-6 mb-6 text-lg font-normal text-white lg:text-xl">
                    En Mi Bicla® Querétaro organizamos carreras de MTB y Pista. Checa nuestro calendario y rueda con nosotros en las carreras más competitivas de Querétaro.
                </p>
                <Button onClick={goToEvents}>Más información</Button>
            </div>
        </section>
    )
}

export default ServiceSection;