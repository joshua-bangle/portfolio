import React from 'react';
import styles from './Card.module.css'
import Typography from '@material-ui/core/Typography'

const Card = (props) => {
    return (
        <div className={styles.Card}>
            <Typography variant='h4'>{props.title}</Typography>
            <Typography variant='body1'>{props.children}</Typography>
        </div>
    )
}

export default Card