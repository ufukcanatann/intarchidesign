import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DesktopSlides, MobileSlides } from '../components/Slides';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const slides = isMobile ? MobileSlides() : DesktopSlides();

  return (
    <div className="bg-white">
      <div className="relative h-screen">
        <Splide
          options={{
            type: 'slide',
            rewind: true,
            loop: true,
            perPage: 1,
            autoplay: true,
            interval: 4000,
            easing: 'ease-in-out',
            arrows: true,
            pagination: true,
            pauseOnHover: false,
            cover: true,
            height: '100vh',
          }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SplideSlide key={slide.id}>
              <div className="relative h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <Link
                      to="/projects"
                      className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
                    >
                      View Our Work
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
