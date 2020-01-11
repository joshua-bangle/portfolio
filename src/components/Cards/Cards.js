import React from 'react';
import styles from './Cards.module.css'
import Typography from '@material-ui/core/Typography'
import IDE from './testide.png'

const Cards = (props) => {
    
    return (
        <div className={styles.Card}>
            <a href={props.page}><div className={styles.Image}>
                <img src={IDE} alt='IDE pic' />
            </div></a>
            <a href={props.page}><Typography variant='h4'>{props.title}</Typography></a>
            <br />
            <Typography variant='h5'>{props.children}</Typography>
        </div>
    )
}

export default Cards