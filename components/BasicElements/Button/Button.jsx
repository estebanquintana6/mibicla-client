import React from "react";

import styles from './Button.module.css';

const Button = ({ children, small, fill, className}) => {

    const sizeClass = small && styles['btn-small'];
    const fillClass = fill && 'bg-secondary';

    return (
        <button className={`${styles.btn} ${sizeClass} ${fillClass} ${className}`}>{children}<span className={styles.btnSpan}></span></button>
    );
}

export default Button;