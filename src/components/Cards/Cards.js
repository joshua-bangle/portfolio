import React from 'react';
import styles from './Cards.module.scss'
import Typography from '@material-ui/core/Typography'


const Cards = (props) => {
    
    return (
        <div className={styles.Card}>
            <a href={props.page}><div className={styles.Image}>
                <img src={props.image} alt='project pic' />
            </div></a>
            <a href={props.page}><Typography variant='h4'>{props.title}</Typography></a>
            
            <Typography variant='h5'>{props.children}</Typography>
        </div>
    )
}

export default Cards