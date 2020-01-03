import React from 'react'
import styles from './Hero.module.css'

const Hero = (props) => {
    return (
    <div className={styles.Hero}>
        <div>
            <p className={styles.HeroText}>Josh Bangle</p>
            <br />
            <br />
            <p className={styles.HeroText}>Web Developer</p>
            <div className={styles.Triangle}>
                
            </div>
        </div>
    </div>
    )
}

export default Hero