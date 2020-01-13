import React from 'react';
import styles from './About.module.scss';

import Aux from '../../hoc/auxil';
import Hero from '../Hero/Hero';
import Josh from './Josh.jpg';

const About = (props) => {
    return (
        <Aux>
            <Hero>
                <p>About me</p>
            </Hero>
            <h1 className={styles.Header}>Hi, I'm Josh.</h1>
            <div id='about' className={styles.About}>
            
                <div>
                    
                    <p className={styles.AboutText}>
                        I'm a Junior Web Developer based in Dallas, TX. My passion for tech began as a child, always surrounded with the latest consoles and computers. Acting and Voice Acting have been 
                        my love and career for the last several years, and in 2019 I discovered that my desire to create and my interest in coding were meant to come together in the form of building
                        engaging and attractive web sites and web apps. As a new dad (little guy joined our tribe July, 2019), my drive to learn and succeed has never been stronger, and I've found that
                        having this motivation has put gale force winds in my proverbial sails. I've made more progress with coding in this last year than in my entire life.
                    </p>
                    <p className={styles.AboutText}>
                        My formal training was accomplished through the completion of Trilogy Education's 6 month full stack web dev boot camp, and with that knowledge a true passion was sparked. Since then I have
                        focused on picking up as much as I can get my hands on. Ruby on Rails is where I began, and as soon as JavaScript caught my eye, React.js became my main focus.
                    </p>
                </div>
                <div className={styles.ImgContainer}>
                    <img src={Josh} alt='Josh' className={styles.Image}/>
                </div>

            </div>
        </Aux>
    )
}

export default About