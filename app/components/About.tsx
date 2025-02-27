import React from "react";

const About: React.FC = () => {
  return (
    <section className="mt-20 py-20 mx-auto max-w-screen-xl">
        {/* Right: About Content */}
        <div className="w-1/2 flex flex-col space-y-6">
          <h2 className="text-4xl font-bold">ABOUT ME</h2>
          <p className="text-md leading-relaxed">
            I’m Neha Arora, a third-year film student at Sheridan College. I
            direct, edit, design sets, and take photos. Basically, if it’s
            creative and involves a camera, I’m in.
            <br />
            <br />
            I love coming-of-age short films, crafting sets, and collaborating
            with awesome people. Got a project or gig in mind? Let’s chat!
          </p>
          <div>
            <h3 className="text-2xl font-semibold">My Favorite Movies:</h3>
            {/* Horizontal Grid for Movie Covers */}
            <div className="flex flex-wrap gap-4 mt-4">
              <img
                src="/top-picks/movie-cover-1.jpg"
                alt="Movie cover 1"
                className="w-24 h-36 object-cover"
              />
              <img
                src="/top-picks/movie-cover-2.jpg"
                alt="Movie cover 2"
                className="w-24 h-36 object-cover"
              />
              <img
                src="/top-picks/movie-cover-3.jpg"
                alt="Movie cover 3"
                className="w-24 h-36 object-cover"
              />
              <img
                src="/top-picks/movie-cover-4.jpg"
                alt="Movie cover 4"
                className="w-24 h-36 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
