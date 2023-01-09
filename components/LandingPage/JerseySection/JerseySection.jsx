import React from "react";

import styles from "./JerseySection.module.css";

const ResourcesSection = () => {
    return (
        <section className={styles["resources-section"]}>
                <div className={"flex pl-8"}>
                    <div className="w-2/4 justify-start flex flex-column">
                        <div className="mt-auto mb-auto">
                            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-primary">Crea el jersey de tu equipo con nosotros.</h1>
                            <p className="mt-6 mb-6 text-lg font-normal lg:text-xl">
                                En Mi Bicla® Querétaro organizamos carreras de MTB y Pista. Checa nuestro calendario y rueda con nosotros en las carreras más competitivas de Querétaro.
                            </p>
                        </div>
                    </div>
                    <div className={`w-2/4 relative p-2 ${styles["store-div"]}`}>
                        <img
                            className={`${styles["store-img"]}`}
                            src="https://s3.amazonaws.com/usac-craft-uploads-production/assets/_dynamicArticleList/Team-Scarlett-1130-×-600-px.jpg" 
                        />
                        { /* <div className="w-2/4 h-1/2 absolute top-[50%] left-[35%] bg-primary z-[-1]">
                        </div>  */ }
                    </div>
                </div>
        </section>
    )
}

export default ResourcesSection;