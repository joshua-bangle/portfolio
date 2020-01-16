import React from 'react'
import styles from './Nav.module.scss'

import Aux from '../../../hoc/auxil'




const Nav = (props) => {

    return(
        <Aux>
            <span id="logo" className={styles.Logo}><a href='/'>Logo</a></span>
            <nav className={styles.Nav}>
                 
                <ul className={styles.Links}>
                
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>    

                    <li>
                        <a href="/blog">Blog</a>
                    </li> 
                </ul>

                
            </nav>
        </Aux>
    )
}

export default Nav