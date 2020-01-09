import React from 'react'
import styles from './Footer.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = (props) => {
    return (
    <div className={styles.Footer}>
        <div className={styles.Links}>
            <ul className={styles.ListStyle}>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </div>
        <div className={styles.Icons}>
            <GitHubIcon style={{ fontSize: 50 }}/>
        </div>
    </div>
    )
}

export default Footer