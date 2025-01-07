import React from 'react';

interface ProjectDetailsSectionProps {
  details: string;
}

export default function ProjectDetailsSection({ details }: ProjectDetailsSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-4">Project Details</h2>
      <p className="text-lg text-gray-700 leading-relaxed">{details}</p>
    </div>
  );
}
