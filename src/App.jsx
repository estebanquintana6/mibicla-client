import React from "react";

import Header from "/src/LandingPage/Header"

import './app.css'; //added line

const App = () => {
    const name = "Esteban";

    return (
        <div>
            <Header imageUrl={"https://via.placeholder.com/150"}></Header>
            <h1 className="text-primary text-4xl font-bold">Hello world! I am using {name}</h1>
        </div>
    );
};

export default App;