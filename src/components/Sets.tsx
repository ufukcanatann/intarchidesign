export const Sets = () => [
    {
      id: 1,
      name: 'modern-city-library',
      title: "Modern City Library",
      category: "Public",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2070",
      description: "A contemporary library design emphasizing open spaces and natural light.",
      features: [
        "Eco-friendly materials",
        "Open-space design",
        "Energy-efficient systems",
        "Innovative architectural techniques"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2070",
        "https://via.placeholder.com/800x400?text=Additional+Image+1",
        "https://via.placeholder.com/800x400?text=Additional+Image+2"
      ],
      technicalDetails: {
        architect: "John Doe Architects",
        yearCompleted: 2022,
        location: "New York, USA",
        size: "15,000 sqm",
        cost: "$25M"
      },
      reviews: [
        {
          reviewer: "Alice Smith",
          comment: "A stunning design that redefines modern libraries.",
          rating: 5
        },
        {
          reviewer: "Michael Johnson",
          comment: "The use of natural light is impressive, but the seating arrangement could be better.",
          rating: 4
        }
      ],
      status: "Completed",
      relatedProjects: ["skyline-residence", "urban-garden-complex"]
    },
    {
      id: 2,
      name: 'skyline-residence',
      title: "Skyline Residence",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070",
      description: "Luxury penthouse with panoramic city views and sustainable features.",
      features: [
        "Panoramic city views",
        "Sustainable building materials",
        "Smart home integration",
        "Premium interior finishes"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070",
        "https://via.placeholder.com/800x400?text=Additional+Image+3",
        "https://via.placeholder.com/800x400?text=Additional+Image+4"
      ],
      technicalDetails: {
        architect: "Skyline Designs",
        yearCompleted: 2021,
        location: "San Francisco, USA",
        size: "8,000 sqm",
        cost: "$15M"
      },
      reviews: [
        {
          reviewer: "Emma Brown",
          comment: "The smart home integration makes this property truly unique.",
          rating: 5
        }
      ],
      status: "Completed",
      relatedProjects: ["modern-city-library", "tech-hub-campus"]
    },
    {
      id: 3,
      name: 'tech-hub-campus',
      title: "Tech Hub Campus",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1498354178607-a79df2916198?auto=format&fit=crop&q=80&w=2070",
      description: "Innovation center designed for collaboration and creativity.",
      features: [
        "Modern workspace design",
        "Flexible collaboration areas",
        "State-of-the-art conference rooms",
        "Sustainable construction"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1498354178607-a79df2916198?auto=format&fit=crop&q=80&w=2070",
        "https://via.placeholder.com/800x400?text=Additional+Image+5",
        "https://via.placeholder.com/800x400?text=Additional+Image+6"
      ],
      technicalDetails: {
        architect: "Tech Studios Inc.",
        yearCompleted: 2020,
        location: "Seattle, USA",
        size: "20,000 sqm",
        cost: "$30M"
      },
      reviews: [
        {
          reviewer: "David Wilson",
          comment: "An inspiring space for innovation and growth.",
          rating: 5
        },
        {
          reviewer: "Sophia Davis",
          comment: "Conference rooms are excellent, but parking is limited.",
          rating: 4
        }
      ],
      status: "In Progress",
      relatedProjects: ["urban-garden-complex", "waterfront-museum"]
    },
    {
      id: 4,
      name: 'urban-garden-complex',
      title: "Urban Garden Complex",
      category: "Mixed-Use",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2070",
      description: "Sustainable development integrating residential and commercial spaces.",
      features: [
        "Integrated green spaces",
        "Mixed-use development",
        "Community-focused design",
        "Eco-friendly construction"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2070",
        "https://via.placeholder.com/800x400?text=Additional+Image+7",
        "https://via.placeholder.com/800x400?text=Additional+Image+8"
      ],
      technicalDetails: {
        architect: "Green Architects",
        yearCompleted: 2019,
        location: "Austin, USA",
        size: "25,000 sqm",
        cost: "$40M"
      },
      reviews: [
        {
          reviewer: "Olivia Martinez",
          comment: "A great example of sustainable urban development.",
          rating: 5
        }
      ],
      status: "Completed",
      relatedProjects: ["tech-hub-campus", "modern-city-library"]
    },
    {
      id: 5,
      name: 'waterfront-museum',
      title: "Waterfront Museum",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a?auto=format&fit=crop&q=80&w=2070",
      description: "Contemporary museum design showcasing local art and history.",
      features: [
        "Waterfront location",
        "Iconic architectural design",
        "Interactive exhibit spaces",
        "Sustainable energy solutions"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a?auto=format&fit=crop&q=80&w=2070",
        "https://via.placeholder.com/800x400?text=Additional+Image+9",
        "https://via.placeholder.com/800x400?text=Additional+Image+10"
      ],
      technicalDetails: {
        architect: "Cultural Spaces Inc.",
        yearCompleted: 2018,
        location: "Miami, USA",
        size: "10,000 sqm",
        cost: "$20M"
      },
      reviews: [
        {
          reviewer: "Liam Clark",
          comment: "An iconic addition to the city’s cultural scene.",
          rating: 5
        }
      ],
      status: "Completed",
      relatedProjects: ["mountain-retreat", "urban-garden-complex"]
    },
    {
      id: 6,
      name: 'mountain-retreat',
      title: "Mountain Retreat",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070",
      description: "Luxury vacation home embracing natural surroundings.",
      features: [
        "Mountain views",
        "Rustic yet modern design",
        "High-end amenities",
        "Private outdoor spaces"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070",
        "https://via.placeholder.com/800x400?text=Additional+Image+11",
        "https://via.placeholder.com/800x400?text=Additional+Image+12"
      ],
      technicalDetails: {
        architect: "Retreat Builders",
        yearCompleted: 2021,
        location: "Aspen, USA",
        size: "5,000 sqm",
        cost: "$10M"
      },
      reviews: [
        {
          reviewer: "Charlotte Martinez",
          comment: "A perfect escape for nature lovers.",
          rating: 5
        }
      ],
      status: "Completed",
      relatedProjects: ["waterfront-museum", "skyline-residence"]
    }
  ];
  