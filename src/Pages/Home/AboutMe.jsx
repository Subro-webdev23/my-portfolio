import React from 'react';
import me from '/me.png'

const AboutMe = () => {
    return (
        <section
            id="about"
            className="bg-[#0a192f] text-[#ccd6f6] px-6 py-15 font-sans max-w-5xl mx-auto"
        >
            <h2 className="text-[#64ffda] font-mono text-3xl sm:text-4xl mb-2">About Me</h2>
            <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-1 text-[##a8b2d1] text-sm leading-relaxed">
                    <p className="mb-4">
                        Hello! My name is Subrota and I enjoy creating things that live on
                        the internet. My interest in web development started in 2022 when I
                        began building landing pages for friends — which led me to learning
                        about HTML &amp; CSS deeply.
                    </p>
                    <p className="mb-4">
                        I’ve since had the privilege of working at a{' '}
                        <span className="text-[#64ffda]">startup</span>, a{' '}
                        <span className="text-[#64ffda]">student project lab</span>, and as a{' '}
                        <span className="text-[#64ffda]">freelancer</span>.
                    </p>
                    <p className="mb-4">
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <ul className="grid grid-cols-2 list-disc list-inside text-slate text-sm">
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Tailwind CSS</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                    </ul>
                </div>

                <div className="flex-shrink-0 w-48 h-48 border-2 border-[#64ffda] rounded-lg overflow-hidden">
                    <img
                        src={me}
                        alt="Subrota Roy"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;