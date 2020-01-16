import React from 'react'

import Cards from '../Cards/Cards'
import Hero from '../Hero/Hero'
import HomeImg from './HomeImg.png'
import IDE from '../Cards/testide.png'
import Spaz from './spaz.png'
import styles from './Home.module.scss'

const Home = () => {
    return(
        <div>
            <Hero
                logo={HomeImg}
                alt='Home Image'>
                <div>                  
                    <p>Josh Bangle</p>
                    <p>Web Developer</p>
                </div>
            </Hero>
            
            <br />
            
                <h1 className={styles.Header}>Projects</h1>
            
            

            <Cards
            title='Spaz'
            page='/spaz'
            image={Spaz}>
                Video hosting, Secure Payments, User Authentication.
            </Cards>
            <hr />
            <h1 className={styles.Header}>Blog</h1>
            <div className='card-display'>
            <Cards title="Creating my first Portfolio"
            page='/card1'
            image={IDE}>
                The challenges I faced while learning React, and how I overcame them.
            </Cards>

            </div>
        </div>
    )
}
export default Home

//Tabs to the left of hero text seperated by vertical hr, hero text slides out from behind tabs on each page change
//Tabs to the left of hero text seperated by vertical hr, hero text slides out from behind tabs on each page change
//Tabs to the left of hero text seperated by vertical hr, hero text slides out from behind tabs on each page change
