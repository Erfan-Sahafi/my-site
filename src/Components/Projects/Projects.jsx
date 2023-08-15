import React from "react";
import Title from "../Title/Title";
import { projects } from "../../data";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="container">
      <Title id="project" title="پروژه ها" />
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
