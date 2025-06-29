import React from 'react';

const Hero = () => {
    return (
        <section className=" py-15 flex flex-col justify-center px-6 bg-[#0a192f] text-[#ccd6f6] font-sans">
            <p className="text-[#64ffda] text-sm mb-3">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">Subrota Roy.</h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate mt-1">I build things for the web.</h2>
            <p className="max-w-xl text-[#a8b2d1] mt-4">
                I'm a frontend developer specializing in building exceptional digital experiences.
                Currently focused on responsive, accessible, and modern web apps using React and Tailwind CSS.
            </p>
            <a href="#projects" className="mt-6 w-max text-[#64ffda] border border-[#64ffda] px-6 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition">Check out my work!</a>
        </section>

    );
};

export default Hero;