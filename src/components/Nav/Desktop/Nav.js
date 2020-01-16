import React from 'react'
import styles from './Nav.module.scss'

import Aux from '../../../hoc/auxil'
import { NavLink } from 'react-router-dom'



const Nav = (props) => {

    return(
        <Aux>
            <span id="logo" className={styles.Logo}><a href='/'>Logo</a></span>
            <nav className={styles.Nav}>
                 
                {/* <ul className={styles.Links}>
                
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>    

                    <li>
                        <a href="/blog">Blog</a>
                    </li> 
                </ul> */}
                <ul className={styles.Links}>
                
                <li>
                    <NavLink to='/' exact activeClassName={styles.Active}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/projects' activeClassName={styles.Active}>Projects</NavLink>
                </li>    

                <li>
                    <NavLink to='/blog' activeClassName={styles.Active}>Blog</NavLink>
                </li> 
            </ul>


                
            </nav>
        </Aux>
    )
}

export default Nav