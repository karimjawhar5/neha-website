import React from 'react';
import PortfolioCard from './PortfolioCard';

const PortfolioGrid: React.FC = () => (
  <section className="mt-20 py-20 mx-auto max-w-screen-xl text-white">
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold">My Portfolio</h1>
      <p className="text-lg mt-2">
        Explore my editing, directing, and set design projects
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
      <PortfolioCard
        title="Jesse's Documentary"
        role="Role: Production Designer"
        imageUrl="\portfolio\thumbnails\jesse-doc.jpg"
      />
      <PortfolioCard
        title="Beauty of Letting Go"
        role="Role: Director"
        imageUrl="\portfolio\thumbnails\jesse-doc.jpg"
      />
      <PortfolioCard
        title="Behind the Lens"
        role="Role: Set Designer"
        imageUrl="\portfolio\thumbnails\jesse-doc.jpg"
      />
      <PortfolioCard
        title="Cinematic Stories"
        role="Role: Editor"
        imageUrl="\portfolio\thumbnails\jesse-doc.jpg"
      />
    </div>
  </section>
);

export default PortfolioGrid;