import React from 'react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;