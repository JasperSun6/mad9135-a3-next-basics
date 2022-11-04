import Link from "next/link";
import styles from "../styles/404.module.css";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404 - Page Not Found</h1>
      <p>
        Go back to the <Link href="/">Home</Link>
      </p>
    </div>
  );
}

export default NotFound;
