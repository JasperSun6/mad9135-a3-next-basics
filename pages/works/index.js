import Head from "next/head";
import styles from "../../styles/Works.module.css";

export default function Works({ works }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>J&S Logistics | Our Work</title>
        <meta name="description" content="J&S Logistics work page" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div>
        <h1 className={styles.h1}>Our Work</h1>

        <ul className={styles.list}>
          {works.map((work) => (
            <li key={work.id} className={styles.listItem}>
              <p className={styles.prj}>Project {work.id}</p>
              <p className={styles.prjTitle}>
                {work.name.charAt(0).toUpperCase() + work.name.slice(1)}
              </p>
              <a className={styles.detail} href={"/works/" + work.id}>
                See Details
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=5"
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      works: data,
    },
  };
}
