import React from 'react'
import styles from './Nav.module.scss'

import Aux from '../../../hoc/auxil'
import { NavLink } from 'react-router-dom'
import Logo from './LogoWhiteSmall.png'


const Nav = (props) => {
    return(
        <Aux>

            <div className={styles.Logo}>   
                <a href='/'><img src={Logo} id="logo" alt='logo' /></a>
            </div>
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