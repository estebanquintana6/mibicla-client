import React from "react";

import './styles.css';

const Button = ({ children }) => {
    return (
        <button className="btn">{children}<span className="btn-span"></span></button>
    );
}

export default Button;