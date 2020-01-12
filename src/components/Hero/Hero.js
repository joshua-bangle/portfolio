import React from 'react'
import styles from './Hero.module.scss'


const Hero = (props) => {
    return (
    <div className={styles.Hero}>
        <div>
            <p className={styles.HeroText}>{props.children}</p>
        </div>
        <div className={styles.HeroLogoContainer}>
            <img src={props.logo} alt={props.alt} className={styles.HeroLogo}/>
        </div>
    </div>
    )
}

export default Hero