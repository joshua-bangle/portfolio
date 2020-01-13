import React from 'react'
import styles from './Nav.module.scss'





const Nav = (props) => {

    return(
        <nav className={styles.Nav}>
            <ul>
                <li id="logo" className={styles.Logo}><a href='/'>Logo</a></li>  
            </ul>
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
    )
}

export default Nav