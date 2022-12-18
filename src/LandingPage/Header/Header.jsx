import React from 'react';

import Navbar from "/src/LandingPage/Navbar";

import './styles.css';

const Header = ({ imageUrl }) => {
    // TODO: Create a Header
    return (
        <section className="h-screen header-section">
            <Navbar></Navbar>
        </section>
    )
}

export default Header;