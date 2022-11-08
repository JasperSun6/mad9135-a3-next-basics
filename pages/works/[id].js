import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/WorkDetail.module.css";

export default function WorkDetails({ work }) {
  return (
    <div className={styles.container}>
      <div>
        <Head>
          <title>J&S Logistics | {work.name}</title>
          <meta name="description" content="J&S Logistics work page" />
          <link rel="icon" href="/images/logo.png" />
        </Head>
      </div>
      <div>
        <h1 className={styles.h1}>Work Details</h1>
        <p className={styles.name}>
          {work.name.charAt(0).toUpperCase() + work.name.slice(1)}
        </p>
        <p className={styles.email}>{work.email}</p>
        <div className={styles.desc}>
          <p className={styles.descTitle}>Description</p>
          <p className={styles.body}>
            {work.body.charAt(0).toUpperCase() + work.body.slice(1)}
          </p>
        </div>
        <Link className={styles.back} href={"/works/"}>
          Back to Works
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=5"
  );
  const data = await res.json();

  const paths = data.map((work) => {
    return {
      params: { id: work.id.toString() },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      work: data,
    },
  };
}
