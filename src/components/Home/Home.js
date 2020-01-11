import React from 'react'

import About from '../About/About'
import Cards from '../Cards/Cards'
import Hero from '../Hero/Hero'
import HomeLogo from './HomeLogo.png'

const Home = () => {
    return(
        <div>
            <Hero
                logo={HomeLogo}
                alt='logo'>
                <div>                  
                    <p>Josh Bangle</p>
                    <p>Web Developer</p>
                </div>
                {/* <img src={HomeLogo} alt='logo' className={styles.HeroLogo} /> */}
            </Hero>
            
            
            <About />
            <div className='card-display'>
            <Cards title="Creating my first Portfolio"
            page='/card1'>
                The challenges I faced while learning react, and how I overcame them.
            </Cards>
            {/* <Cards title="second card"
            page='/2'>
                this is my second card
            </Cards> */}
            </div>
        </div>
    )
}
export default Home


