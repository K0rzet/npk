import ProjectCard from "../../../components/CategoryCard/ProjectCategoryCard/ProjectCard";
import { useProjects } from "../../../components/HomeProjects/useHomeProjects";
import Meta from "../../../utils/Meta";
import styles from "../ProducsCategories/ProductsCategoriesPage.module.scss";

const Projects = () => {
  const { projects } = useProjects();

  return (
    <Meta title="Проекты">
      <div className={styles.categoriesPage}>
        <h1>Проекты</h1>
        <div className={styles.categoryCards}>
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </Meta>
  );
};

export default Projects;
