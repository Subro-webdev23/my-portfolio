import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
            .then(res => res.json())
            .then(data => {
                setProject(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Failed to fetch project:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-center text-[#64ffda] mt-10">Loading...</div>;
    }

    if (!project) {
        return <div className="text-center text-red-500 mt-10">Project not found</div>;
    }
    return (
        <section className="bg-[#0a192f] text-[#ccd6f6] px-6 py-16 max-w-5xl mx-auto font-sans">
            <img
                src={project.image}
                alt={project.name}
                className="w-full h-[450px] object-top object-cover top-0 rounded-lg mb-6"
            />
            <h2 className="text-3xl font-bold text-[#64ffda] mb-4">{project.name}</h2>
            <p className="text-[#a8b2d1] mb-6">{project.description}</p>

            <div className="mb-6">
                <h3 className="text-[#64ffda] font-semibold mb-2">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                    {project.stack?.map((tech, i) => (
                        <span key={i} className="bg-[#233554] text-[#64ffda] px-2 py-1 rounded text-sm font-mono">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-[#64ffda] font-semibold mb-2">Challenges:</h3>
                <ul className="list-disc pl-5 text-[#a8b2d1]">
                    {project.challenges?.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-[#64ffda] font-semibold mb-2">Future Plans:</h3>
                <ul className="list-disc pl-5 text-[#a8b2d1]">
                    {project.futurePlans?.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>

            <div className="mt-6 flex gap-6 text-[#64ffda]">
                {project.liveLink && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white"
                    >
                        🔗 Live Site
                    </a>
                )}
                {project.githubLink && (
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white"
                    >
                        💻 GitHub
                    </a>
                )}
            </div>
        </section>
    );
};

export default Details;