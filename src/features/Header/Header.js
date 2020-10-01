import React, { useState } from 'react';
import styles from './Header.module.css';

export function Header() {
    return (
        <div className={styles.headerBox}>
            <h1>QUOTE GENERATOR</h1>
        </div>
    )
}
