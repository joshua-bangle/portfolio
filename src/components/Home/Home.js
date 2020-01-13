import React from 'react'

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
            
            <br />
            <h1>Projects</h1>
            <div className='card-display'>
            <Cards title="Creating my first Portfolio"
            page='/card1'>
                The challenges I faced while learning React, and how I overcame them.
            </Cards>

            </div>
        </div>
    )
}
export default Home


