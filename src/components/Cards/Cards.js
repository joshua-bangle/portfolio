import React from 'react';
import styles from './Cards.module.css'
import Typography from '@material-ui/core/Typography'
import IDE from './testide.png'

const Cards = (props) => {
    
    return (
        <div className={styles.Card}>
            <div className={styles.Image}>
                <img src={IDE} alt='IDE pic' />
            </div>
            <a href={props.page}><Typography variant='h4'>{props.title}</Typography></a>
            <Typography variant='body1'>{props.children}</Typography>
        </div>
    )
}

export default Cards