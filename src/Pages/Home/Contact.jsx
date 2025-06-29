import React from 'react';

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-[#0a192f] text-[#ccd6f6] px-6 py-24 font-sans text-center max-w-2xl mx-auto"
        >
            <h2 className="text-[#64ffda] font-mono text-3xl sm:text-4xl mb-2">What’s Next?</h2>
            <h3 className="text-[#8892b0] text-3xl sm:text-4xl font-bold mb-6">
                Get In Touch
            </h3>
            <p className="text-[#a8b2d1] mb-8 text-sm sm:text-base leading-relaxed">
                I’m currently open to new opportunities. If you have a project, job, or just want to connect — feel free to reach out!
                I’ll get back to you as soon as I can.
            </p>
            <a
                href="mailto:subrota@example.com"
                className="inline-block text-[#64ffda] border border-[#64ffda] px-6 py-3 rounded hover:bg-[#64ffda] hover:text-[#0a192f] font-mono text-sm transition"
            >
                Say Hello
            </a>
        </section>
    );
};

export default Contact;