import React from "react";

import styles from './Button.module.css';

const Button = ({ children }) => {
    return (
        <button className={styles.btn}>{children}<span className={styles.btnSpan}></span></button>
    );
}

export default Button;