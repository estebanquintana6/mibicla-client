import React from "react";

import styles from "./JerseySection.module.css";

const ResourcesSection = () => {
    return (
        <section className={`${styles["resources-section"]} md:h-screen`}>
                <div className={"md:flex md:pl-8"}>
                    <div className="xs:w-full md:w-2/4 justify-start flex flex-column">
                        <div className="mt-auto mb-auto bg-black bg-opacity-70 p-4 rounded-xl">
                            <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none text-white">Crea el <span className="text-primary">jersey</span> de tu equipo con nosotros.</h1>
                            <p className="mt-6 mb-6 text-lg font-normal lg:text-xl text-white">
                                En Mi Bicla® Querétaro organizamos carreras de MTB y Pista. Checa nuestro calendario y rueda con nosotros en las carreras más competitivas de Querétaro.
                            </p>
                        </div>
                    </div>
                    <div className={`md:w-2/4 relative xs:mt-8 md:p-2 flex`}>
                        <img
                            className={`${styles["store-img"]} ml-auto mr-auto mt-auto mb-auto`}
                            src="/photos/jersey.JPG" 
                        />
                        { /* <div className="w-2/4 h-1/2 absolute top-[50%] left-[35%] bg-primary z-[-1]">
                        </div>  */ }
                    </div>
                </div>
        </section>
    )
}

export default ResourcesSection;