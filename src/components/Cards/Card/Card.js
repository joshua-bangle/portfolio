import React from 'react'

import styles from './Card.module.scss'
import Hero from '../../Hero/Hero'
import ScrollIntoView from 'react-scroll-into-view'
import Button from '@material-ui/core/Button'


const Card = () => {
    return(
        <div>
            <Hero>
                <p id='top'>Creating my first</p>
                <p>Portfolio</p>
            </Hero>
            <div className={styles.Card}>
            <h2 className={styles.Header}>Hello World...<ScrollIntoView selector='#layout'><Button className={styles.Skip}>(Click here to skip to the important bits)</Button></ScrollIntoView></h2>
            
            <p className={styles.CardText}>
                First of all, thanks for taking the time to read my "blog" of sorts. Throughout these posts, I will be showing off some of my past projects, as well as doing a (in a perfect world) weekly post of challenges and accomplishments
                that I come across in my coding journey.
            </p>
            <p className={styles.CardText}>
                Now, as the name suggests, I want to talk about this portfoliio. This is likely the most daunting challenge I've come across up to this point,
                not because it is particularly difficult, but because it is <i>mine</i>. I am a professional actor and voice actor (on top of this whole coding thing), and as
                a performer, I strive to put my best foot forward. If I'm not careful, I can end up spending far too much time on every little detail; make sure the margin is perfect,
                this shade of grey is juuuuuuuust too bright, it might hurt someone's eyes in a dark room, that header is a tad TOO centered... After going through multiple iterations, and stalling for as long as possible,
                you are looking at the Portfolio v1.0.
            </p>
            <p className={styles.CardText}>
                I chose React.js to create my portfolio. It's fast, clean, I'm a fan of modular code, and most importantly, I adore JavaScript. As much of a sin in the programming world as that is to say, functions are my jam.
                But you're not here to read about my favorite languages, you're here to see why, and maybe how, I did what I did here. I'll go ahead and highlight some of my proudest features of this simple little (forever unfinished) portfolio and blog.
            </p>
            <h2 id="layout" className={styles.SectionHeader}>Challenge 1: Layout and Styling</h2>
            <p className={styles.CardText}>
                I chose to use an entirely flex-box based approach to my site, and avoided a grid system. Grids certainly have their place in styling, but can overcomplicate things if used where they aren't needed. 
                Since the majority of my blogs will likely consist of 2 columns, one being text and the other a picture, some good-ol' justify-content: space-around should do the trick. I've also opted for the Material-ui
                library for button and icon styling, and will likely be taking advantage of it's many general use components.
            </p>
            <h2 className={styles.SectionHeader}>Challenge 2: React Routing</h2>
            <p className={styles.CardText}>
                I'd heard a ton about single page applications with a multipage feel using React, and that was one of the major pulls for me (that and JavaScript. Looooooove that JavaScript). But coming from Rails and 
                setting up routes using the full MVC structure, one of the first things to study up on was React Routing. Having the ability to call a component into place with a simple Route element was a real and true
                breath of fresh air. Moving forward I expect things to be a bit more complicated once I'm on a larger project with a team, not everything can be a single page application. But taking advantage of React's 
                ability to re-render the DOM so seamlessly with the Route component really cemented my choice to use it as my framework.
            </p>
            <h2 className={styles.SectionHeader}>Challenge 3: Nesting Components</h2>
            <p className={styles.CardText}>
                As components started as a foreign concept to me just a few weeks ago, learning to utilize them in the most effecient manner is something that will likely take me quite a while to master. Even now (ESPECIALLY now), 
                if you have come here as someone familiar with React, you have likely already noticed some ineffeciencies in my component structure. Using components within other components seems like such a powerful tool, and is something that
                I have begun to explore and enjoy up to this point. But of course, I've only just scratched the surface there.
            </p>
            <h2 className={styles.SectionHeader}>Week 1 wrap up</h2>
            <p className={styles.CardText}>
                Perhaps the biggest challenge up to this point has been just simply releasing this portfolio in an "unfinished" state. But if I were to wait until it felt perfect, it would never see the light of day. So here we are, 
                a junior dev in the first steps of getting out there, showing my code to the world. Thanks for reading, and I look forward to many more posts to come.
            </p>
            </div>
            <br />
                <ScrollIntoView selector='#logo'><Button variant="outlined">Back to top</Button></ScrollIntoView>

            <br />
        </div>
    )
}

export default Card