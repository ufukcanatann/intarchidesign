import React from 'react';

interface ProjectHeaderProps {
  title: string;
  image: string;
  category: string;
}

export default function ProjectHeader({ title, image, category }: ProjectHeaderProps) {
  return (
    <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl uppercase">{category}</p>
        </div>
      </div>
    </div>
  );
}
