import React from 'react';

const projects = [
    {
        title: 'Google Keep Clone',
        description: 'A simple Google Keep clone built with React and Firebase.',
        tech: ['React', 'Firebase', 'CSS'],
    },
    {
        title: 'OctoProfile',
        description:
            'A GitHub profile visualizer that pulls user info via GitHub API.',
        tech: ['React', 'GitHub API', 'Chart.js'],
    },
    {
        title: 'Apple Music Embed',
        description:
            'A web widget for embedding Apple Music preview players using REST API.',
        tech: ['HTML', 'JavaScript', 'API'],
    },
];
const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-[#0a192f] text-[#ccd6f6] px-6 py-20 font-sans max-w-6xl mx-auto"
        >
            <h2 className="text-[#64ffda] font-mono text-3xl sm:text-4xl mb-4">
                Other Noteworthy Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-light[#0a192f] p-6 rounded-lg shadow hover:-translate-y-1 transition transform duration-300"
                    >
                        <h3 className="text-[#8892b0] font-bold text-lg mb-2">
                            {project.title}
                        </h3>
                        <p className="text-[#a8b2d1] text-sm mb-4">{project.description}</p>
                        <ul className="flex flex-wrap gap-2 text-xs text-slate font-mono">
                            {project.tech.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-10 text-center">
                <button className="text-[#64ffda] border border-[#64ffda] px-6 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition">
                    Show More
                </button>
            </div>
        </section>
    );
};

export default Projects;