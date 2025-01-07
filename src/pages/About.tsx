import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070")'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Creating spaces that inspire and transform lives through innovative architecture
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Profile</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, ARCH Studio has been at the forefront of innovative architectural design. 
              Our passion lies in creating spaces that not only meet functional requirements but also 
              inspire and elevate the human experience.
            </p>
            <p className="text-gray-600">
              With over a decade of experience, we've successfully completed projects ranging from 
              intimate residential spaces to large-scale commercial developments. Our approach combines 
              contemporary design principles with sustainable practices.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="/public/images/about/abfuar_interior_architect-min.webp"
              alt="Architect working"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Award className="w-12 h-12 mx-auto mb-4 text-gray-900" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, ensuring the highest standards of design and execution.
              </p>
            </div>
            <div className="text-center p-6">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-900" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Embracing new technologies and design approaches to create forward-thinking solutions.
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-gray-900" />
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Working closely with clients to bring their vision to life through meaningful partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}