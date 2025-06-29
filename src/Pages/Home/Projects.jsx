import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';


const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects);

    return (
        <section
            id="projects"
            className="bg-[#0a192f] text-[#ccd6f6] px-6 py-20 font-sans max-w-6xl mx-auto"
        >
            <h2 className="text-[#64ffda] font-mono text-2xl mb-8">
                Other Noteworthy Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>

            <div className="mt-10 text-center">
                <button className="text-[#64ffda] border border-[#64ffda] px-6 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition duration-300">
                    Show More
                </button>
            </div>
        </section>
    );
};

export default Projects;
