import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sets } from '../components/Sets';
import ProjectHeader from '../components/ProjectHeader';
import ProjectGallery from '../components/ProjectGallery';
import ProjectDetailsSection from '../components/ProjectDetailsSection';
import ProjectFeatures from '../components/ProjectFeatures';

const projects = Sets();

export default function ProjectDetails() {
    const { name } = useParams();
    const project = projects.find((p) => p.name === decodeURIComponent(name || ''));

    if (!project) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-800">Project not found</h1>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <ProjectHeader title={project.title} image={project.image} category={project.category} />
            <ProjectDetailsSection details={project.description} />
            <ProjectGallery images={project.gallery} />
            <div className="flex mx-auto container justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                    <div className="space-y-6">
                        {project.reviews.map((review, index) => (
                            <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold">{review.reviewer}</h3>
                                <p className="text-gray-700 mt-2">{review.comment}</p>
                                <p className="text-yellow-500 mt-2">Rating: {'★'.repeat(review.rating)}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
                    <ul className="list-none space-y-2 text-gray-700">
                        <li>
                            <strong>Architect:</strong> {project.technicalDetails.architect}
                        </li>
                        <li>
                            <strong>Year Completed:</strong> {project.technicalDetails.yearCompleted}
                        </li>
                        <li>
                            <strong>Location:</strong> {project.technicalDetails.location}
                        </li>
                        <li>
                            <strong>Size:</strong> {project.technicalDetails.size}
                        </li>
                        <li>
                            <strong>Cost:</strong> {project.technicalDetails.cost}
                        </li>
                    </ul>
                </div>
                <ProjectFeatures features={project.features} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-2xl font-bold mb-4">Related Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.relatedProjects.map((relatedName) => {
                        const relatedProject = projects.find((p) => p.name == relatedName);
                        return relatedProject ? (
                            <Link
                                key={relatedProject.id}
                                to={`/projects/${relatedProject.name}`}
                                className="group relative overflow-hidden rounded-lg shadow-lg"
                            >
                                <img
                                    src={relatedProject.image}
                                    alt={relatedProject.title}
                                    className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <h3 className="text-white text-lg font-bold">{relatedProject.title}</h3>
                                </div>
                            </Link>
                        ) : null;
                    })}
                </div>
            </div>
        </div>
    );
}
