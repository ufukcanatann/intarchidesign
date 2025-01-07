import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <Splide
        options={{
          type: 'slide',
          rewind: true,
          perPage: 1,
          autoplay: true,
          interval: 4000,
          arrows: true,
          pagination: true,
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
