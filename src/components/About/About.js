import React from 'react'
import styles from './About.module.scss'

const About = (props) => {
    return (
        <div id='about' className={styles.About}>
            <h1 className={styles.Header}>Hi, I'm Josh.</h1>
            <p className={styles.AboutText}>
                I'm a junior web developer based in Dallas, TX. My passion for tech began as a child, always surrounded with the latest consoles and computers. Acting and Voice Acting have been 
                my love and career for the last several years, and in 2019 I discovered that my desire to create and my interest in coding were meant to come together in the form of building
                engaging and attractive web sites and web apps. My formal training was accomplished through Trilogy Education's 6 month full stack web dev boot camp, and with that knowledge a true passion was sparked. Since then I have
                focused on picking up as much as I can get my hands on. Ruby on Rails is where I began, and as soon as JavaScript caught my eye, React.js became my main focus.
            </p>

        </div>
    )
}

export default About