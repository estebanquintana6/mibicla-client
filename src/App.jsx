import React from "react";

import Header from "/src/LandingPage/Header"
import ServiceSection from "/src/LandingPage/ServiceSection"

import './app.css'; //added line

const App = () => {

    return (
        <div>
            <Header></Header>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default App;