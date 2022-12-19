import React, { useRef } from "react";

import './styles.css';

const Carousel = () => {

    const slidesRef = useRef();

    const handleButtonClick = (e, offset) => {
        const slides = slidesRef.current;
        const activeSlide = slides.querySelector("[data-active]");
        
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    }

    return (
        <section aria-label="Photos">
            <div className="carousel-container">
                <div className="logo-container">
                    <img src="./img/full_logo.svg" alt="logo"/>
                </div>
                <div className="carousel">
                    <button className="carousel-btn prev" onClick={(e) => handleButtonClick(e, -1)}>{"<"}</button>
                    <button className="carousel-btn next" onClick={(e) => handleButtonClick(e, 1)}>{">"}</button>
                    <ul ref={slidesRef}>
                        <li className="slide" data-active>
                            <img src="./img/photos/Foto1.jpg" alt="Photo1"/>
                        </li>
                        <li className="slide">
                            <img src="./img/photos/foto2.jpg" alt="Photo2"/>
                        </li>
                        <li className="slide">
                            <img src="./img/photos/foto3.jpg" alt="Photo2"/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Carousel;