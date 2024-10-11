import { HashLink as Link } from 'react-router-hash-link'
import { IProject } from "../../../types/types";
import styles from "./ProjectCard.module.scss";

export interface IProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  project,
}) => {
  return (
    <div className={styles.projectCard}>
      <Link to={`/projects/${project.id}`} className={styles.projectLink}>
        <img
          src={project.images[0].image}
          alt={project.title}
          className={styles.projectImage}
        />
        <div className={styles.projectOverlay}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
