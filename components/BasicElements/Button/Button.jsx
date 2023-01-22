import React from "react";

import styles from './Button.module.css';

const Button = ({ children, small, fill, className, onClick}) => {

    const sizeClass = small && styles['btn-small'];
    const bgClass = fill ? 'bg-secondary' : 'bg-transparent';

    return (
        <button 
            className={`${styles.btn} ${sizeClass} ${bgClass} ${className}`}
            onClick={onClick}>
            {children}
            <span className={styles.btnSpan}></span>
        </button>
    );
}

export default Button;