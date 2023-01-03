import React from "react";

import Button from "../../BasicElements/Button";

import styles from "./ServiceSection.module.css";

const ServiceSection = () => {
    return (
        <section className={`${styles.container} bg-white`}>
            <div className={`${styles.imagediv}`}>
            </div>
            <div className={`${styles.descriptionContainer} bg-black bg-opacity-70 rounded-xl backdrop-blur-sm`}>
                <hr className="my-4 mx-auto w-100 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-white" />
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Rueda con <span className="text-primary">los #1</span> de Querétaro.</h1>
                <p className="mt-6 mb-6 text-lg font-normal text-white lg:text-xl">
                    En Mi Bicla® Querétaro organizamos carreras de MTB y Pista. Checa nuestro calendario y rueda con nosotros en las carreras más competitivas de Querétaro.
                </p>
                <Button>Más información</Button>
            </div>
        </section>
    )
}

export default ServiceSection;