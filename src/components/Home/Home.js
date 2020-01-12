import React from 'react'

import About from '../About/About'
import Cards from '../Cards/Cards'
import Hero from '../Hero/Hero'
import HomeImg from './HomeImg.png'

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
            
            
            <About />
            <div className='card-display'>
            <Cards title="Creating my first Portfolio"
            page='/card1'>
                The challenges I faced while learning react, and how I overcame them.
            </Cards>

            </div>
        </div>
    )
}
export default Home


