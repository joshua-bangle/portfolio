import React from 'react';

import Aux from '../../hoc/auxil';
import styles from './Squares.module.scss'

const squares = () => (
    <Aux>
        <div className={styles.Container}>
            <div className={styles.Col1}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.Col2}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.Col3}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </Aux>
)

export default squares;