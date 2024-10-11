import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.scss";
import { useProjects } from "./useHomeProjects";

const Projects: React.FC = () => {
  const { projects, isLoading } = useProjects();

  return (
    <section className={styles.projects}>
      <h2>Наши проекты</h2>
      <div className={styles.projectsContent}>

        {isLoading ? (
          <p>Загрузка..</p>
        ) : projects ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              images={project.images}
              description={project.description}
              id={project.id}
              title={project.title}
            />
          ))
        ) : (
          <p>Ошибка</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
