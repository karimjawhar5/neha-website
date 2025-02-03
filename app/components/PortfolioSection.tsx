// app/components/PortfolioSection.tsx
import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioSection: React.FC = () => {
  // Sample data for each sub-section – replace with your real data.
  const directingProjects = [
    {
      id: 1,
      image: '/portfolio-images/portfolio-image-1.jpg',
      title: 'Directing Project 1',
      subtitle: 'A cinematic experience',
      href: '/portfolio/directing1',
    },
    {
      id: 2,
      image: '/portfolio-images/portfolio-image-1.jpg',
      title: 'Directing Project 2',
      subtitle: 'Storytelling at its finest',
      href: '/portfolio/directing2',
    },
  ];

  const editingProjects = [
    {
      id: 1,
      image: '/portfolio-images/portfolio-image-1.jpg',
      title: 'Editing Project 1',
      subtitle: 'Seamless transitions',
      href: '/portfolio/editing1',
    },
    {
      id: 2,
      image: '/portfolio-images/portfolio-image-1.jpg',
      title: 'Editing Project 2',
      subtitle: 'Cutting edge techniques',
      href: '/portfolio/editing2',
    },
  ];

  const productionDesignProjects = [
    {
      id: 1,
      image: '/portfolio-images/portfolio-image-1.jpg',
      title: 'Production Design 1',
      subtitle: 'Visually striking',
      href: '/portfolio/production1',
    },
    {
      id: 2,
      image: '/portfolio-images/portfolio-image-1.jpg',
      title: 'Production Design 2',
      subtitle: 'Innovative spaces',
      href: '/portfolio/production2',
    },
  ];

  return (
    <section id="portfolio" className="py-16 px-4 md:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl font-bold mb-2 text-center">Portfolio</h2>
        <p className='font-light mb-8 text-center'>Explore portfolio of films, edits, and production design projects.</p>
        
        {/* Directing Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium mb-4">Directing Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {directingProjects.map((item) => (
              <PortfolioItem
                key={`directing-${item.id}`}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
              />
            ))}
          </div>
        </div>
        
        {/* Editing Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium mb-4">Editing Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {editingProjects.map((item) => (
              <PortfolioItem
                key={`editing-${item.id}`}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
              />
            ))}
          </div>
        </div>
        
        {/* Production Design Projects */}
        <div>
          <h3 className="text-2xl font-medium mb-4">Production Design Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {productionDesignProjects.map((item) => (
              <PortfolioItem
                key={`production-${item.id}`}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
