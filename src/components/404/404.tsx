import { HashLink as Link } from "react-router-hash-link";
import styles from "./404.module.scss";
import Meta from "../../utils/Meta";
const NotFoundPage = () => {
  return (
    <Meta title="404, страница не найдена">
      <div className={styles.notFoundContainer}>
        <h1>Извините, данной страницы не существует</h1>
        <Link to="/" className={styles.notFoundLink}>
          Вернуться на главную
        </Link>
      </div>
    </Meta>
  );
};

export default NotFoundPage;
