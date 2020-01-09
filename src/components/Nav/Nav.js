import React from 'react'
import styles from './Nav.module.css'

const Nav = (props) => {
    return(
        <nav className={styles.Nav}>
            <div>
                <p className={styles.Logo}>Logo</p>  
            </div>
            <div>
                <span className={styles.Links}>
                    Projects
                </span>    
                <span className={styles.Links}>
                    About
                </span>    
            </div>
            
        </nav>
    )
}

export default Nav