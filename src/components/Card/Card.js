import React from 'react';
import styles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={styles.Card}>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    )
}

export default Card