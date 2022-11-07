import Link from "next/link";
import styles from "../styles/404.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>404</h1>
      <p className={styles.notFound}>Page Not Found</p>
      <p className={styles.back}>
        Go back to the{" "}
        <Link className={styles.home} href="/">
          Home
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
