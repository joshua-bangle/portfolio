import React from 'react'
import styles from './Hero.module.scss'

import Squares from '../Squares/Squares'
import Nav from '../Nav/Desktop/Nav'
import Aux from '../../hoc/auxil'


const Hero = (props) => {

    
    return (
    <Aux>
        
        <div className={styles.Hero}>
  
            <Nav />
            <div>
                <p className={styles.HeroText}>{props.children}</p>
            </div>

            <div className={styles.Squares}>
                <Squares />  
            </div>
            
        </div>
    </Aux>
    )
}

export default Hero