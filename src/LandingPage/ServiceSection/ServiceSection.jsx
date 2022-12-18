import React from "react";

import "./styles.css";

const ServiceSection = () => {
    return (
        <section className="service-section bg-white">
            <div className="service-image-div">
            </div>
            <div className="service-desc-div bg-black bg-opacity-70 rounded-xl backdrop-blur-sm">
                <hr className="my-4 mx-auto w-100 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-white" />
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Rueda con <span class="text-primary">los #1</span> de Querétaro.</h1>
                <p class="mt-6 mb-6 text-lg font-normal text-white lg:text-xl">
                    En Mi Bicla® Querétaro organizamos carreras de MTB y Pista. Checa nuestro calendario y rueda con nosotros en las carreras más competitivas de Querétaro.
                </p>
                <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Learn more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </section>
    )
}

export default ServiceSection;