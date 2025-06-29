import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router';

const ProjectCard = ({ project }) => {
    return (
        <Link to={`/projects/${project._id}`}>

            <div className="bg-[#112240] rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 p-5 flex flex-col justify-between h-full">
                {/* Image */}
                <div className="mb-4">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-[#64ffda] font-bold text-lg mb-2">{project.name}</h3>
                    <p className="text-[#a8b2d1] text-sm">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4 text-sm">
                    {project.stack?.map((tech, i) => (
                        <span
                            key={i}
                            className="bg-[#233554] text-[#64ffda] px-2 py-1 rounded-md font-mono text-xs"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex justify-start gap-4 mt-6 text-[#64ffda] text-lg">
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                            title="Live Site"
                        >
                            <FiExternalLink />
                        </a>
                    )}
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                            title="GitHub Repo"
                        >
                            <FiGithub />
                        </a>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;