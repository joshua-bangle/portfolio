import React from 'react'
import styles from './Hero.module.scss'

import Squares from '../Squares/Squares'
import Nav from '../Nav/Nav'
const Hero = (props) => {
    return (
    <div className={styles.Hero}>
        <nav className={styles.Nav}>
        <ul className={styles.Links}>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/">Projects</a>
                </li>    

                <li>
                    <a href="/blog">Blog</a>
                </li> 
            </ul>
        </nav>
        <div>
            <p className={styles.HeroText}>{props.children}</p>
        </div>
        {/* <div className={styles.HeroLogoContainer}>
            <img src={props.logo} alt={props.alt} className={styles.HeroLogo}/>
        </div> */}
        <div className={styles.Squares}>
            <Squares />  
        </div>
        
    </div>
    )
}

export default Hero