import React from "react";
import styles from "./ProjectCard.module.scss";
import { IProject } from "../../types/types";
import { getProjectsUrl } from "../../configs/urls.config";
import { HashLink as Link } from 'react-router-hash-link'

const ProjectCard: React.FC<IProject> = ({ id, title, images, description }) => {
  return (
    <Link to={getProjectsUrl(id)} className={styles.projectCard}>
      <img src={images[0].image} alt={description} className={styles.projectImage} />
      <div className={styles.overlay}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </Link>
  );
};

export default ProjectCard;
