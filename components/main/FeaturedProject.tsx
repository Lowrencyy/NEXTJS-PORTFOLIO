import React from "react";
import ProjectCard from "../sub/ProjectCard";

const FeaturedProject = () => {
    return (
      <section className="sticky z-50 ">
          <div
          className="flex flex-col items-center justify-center mb-20"
          id="projects"
        >
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
           FEATURED PROJECT&#39;S
          </h1>
          <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
         <a target="_blank" href="https://cinezone.netlify.app/">
         <ProjectCard
              src="/Cinezone.png"
              title="CINEZONE"
              description="A Movie Website Utilizing HTML, CSS and javascript also Fetching Data From The TMDB API"
              
            />
         </a>
         <a href="https://kodecamp86.netlify.app/" target="_blank"><ProjectCard
              src="/Kodecamp.png"
              title="KODECAMP86"
              description="A Website For School Management System Using HTML and Pure CSS"
            /></a>

           <a target="_blank" href="https://koderesto.netlify.app/">
           <ProjectCard
              src="/koderesto.png"
              title="KODERESTO86"
              description="A Food Website Utilizing HTML CSS and bootstrap full responsive website"
              
            />
           </a>
          <a target="_blank" href="https://kodenews.netlify.app/">
          <ProjectCard
              src="/kodenews.png"
              title="KODENEWS"
              description="A Website Utilizing Pure HTML CSS with context of News"
            />
          </a>
          </div>
        </div>
      </section>
      );
}

export default FeaturedProject