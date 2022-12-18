import React from 'react';

import Navbar from "/src/LandingPage/Navbar";

import './styles.css';

const Header = () => {
    // TODO: Create a Header
    return (
        <section className="h-screen header-section">
            <Navbar></Navbar>
            <div className="image-container">
                <img src="./img/full_logo.svg" width={"100%"} height={"100%"} alt="logo" />
            </div>
        </section>
    )
}

export default Header;