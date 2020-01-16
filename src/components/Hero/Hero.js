import React from 'react'
import styles from './Hero.module.scss'

import Squares from '../Squares/Squares'
import Nav from '../Nav/Desktop/Nav'
import MobileNav from '../Nav/Mobile/Mobile'
import Aux from '../../hoc/auxil'
import { NavLink } from 'react-router-dom';

const Hero = (props) => {
    const navToggleHandler = () => window.screen.width > 1199 ? <Nav /> : <MobileNav />;
    
    return (
    <Aux>
        
        <div className={styles.Hero}>
            {/* <nav className={styles.Nav}>
                <ul className={styles.Links}>
                    <li>
                    <NavLink activeClassName={styles.isActive} to='/'>About</NavLink>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>    

                    <li>
                        <a href="/blog">Blog</a>
                    </li> 
                </ul>
            </nav> */}
            <Nav />
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
    </Aux>
    )
}

export default Hero