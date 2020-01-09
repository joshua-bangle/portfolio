import React from 'react'
import styles from './Footer.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

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
            <div>
                <a href="https://github.com/joshua-bangle"><GitHubIcon style={{ fontSize: 60 }}/> </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/josh-bangle/"><LinkedInIcon style={{ fontSize: 60 }}/> </a>
            </div>
            <div>
                <a href="https://www.instagram.com/joshuabangle/"><InstagramIcon style={{ fontSize: 60 }}/> </a>
            </div>
        </div>
    </div>
    )
}

export default Footer