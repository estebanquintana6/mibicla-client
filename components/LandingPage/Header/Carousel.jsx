import React, { useRef } from "react";

import Image from 'next/image'

import logo from '/public/logo.svg';

import styles from './Carousel.module.css';

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
            <div className={styles.carouselContainer}>
                <div className={styles.logoContainer}>
                    <Image
                        alt="Logo"
                        fill
                        src={logo}
                    />
                </div>
                <div className={styles.carousel}>
                    <button className={`${styles.carouselBtn} left-1`} onClick={(e) => handleButtonClick(e, -1)}>{"<"}</button>
                    <button className={`${styles.carouselBtn} right-1`} onClick={(e) => handleButtonClick(e, 1)}>{">"}</button>
                    <ul ref={slidesRef}>
                        <li className={styles.slide} data-active>
                            <img src="/photos/carousel/1.JPG" alt="Photo1" />
                        </li>
                        <li className={styles.slide}>
                            <img src="/photos/carousel/2.JPG" alt="Photo2" />
                        </li>
                        <li className={styles.slide}>
                            <img src="/photos/carousel/3.JPG" alt="Photo2" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Carousel;