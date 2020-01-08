import React from 'react'
import styles from './Hero.module.css'
import logo from './heroLogo.png'

const Hero = (props) => {
    return (
    <div className={styles.Hero}>
        <div>
            <p className={styles.HeroText}>Josh Bangle</p>
            <br />
            <br />
            <p className={styles.HeroText}>Web Developer</p>

        </div>
        <img src={logo} alt='logo' className={styles.HeroLogo} />
    </div>
    )
}

export default Hero