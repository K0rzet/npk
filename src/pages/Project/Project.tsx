import { useParams } from "react-router-dom";
import { useProject } from "./useProject";
import styles from "./Project.module.scss";
import Meta from "../../utils/Meta";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const { project } = useProject(id);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <Meta title={project.title}>
      <div className={styles.projectContainer}>
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image.image}
            alt={`Изображение проекта ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>
    </Meta>
  );
};

export default Project;
