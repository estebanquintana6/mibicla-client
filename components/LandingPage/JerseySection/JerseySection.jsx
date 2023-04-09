import React from "react";
import { useRouter } from 'next/router'

import Button from "@components/BasicElements/Button";

import styles from "./JerseySection.module.css";

const ResourcesSection = () => {
    const router = useRouter()
    
    const goToContactanos = (e) => {
        e.preventDefault();
        router.push('/#contactanos');
    }

    return (
        <section className={`${styles["resources-section"]} md:h-screen`}>
                    <div className="flex md:w-2/5 xs:w-full md:bg-black md:bg-opacity-70 rounded-xl md:backdrop-blur-sm md:pb-2">
                        <div className="mt-auto mb-auto rounded-xl xs:my-auto md:px-10">
                            <hr className="my-4 mx-auto w-100 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-white" />
                            <h1 className="align-middle mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl text-white">Personaliza y diseña el <span className="text-primary">jersey</span> de tu equipo.</h1>
                            <p className="align-middle mt-6 mb-6 text-lg font-normal text-white lg:text-xl">
                                Dale un toque único a tu equipo con materiales de la mejor calidad y precios accesibles.
                                ¿Aún no tienes tu diseño? nosotros junto con tus ideas diseñaremos el mejor jersey, para el mejor equipo o evento.                             
                            </p>
                            <Button onClick={goToContactanos}>Más información</Button>
                        </div>

                    </div>
        </section>
    )
    
}

export default ResourcesSection;