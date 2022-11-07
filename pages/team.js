import Head from "next/head";
import styles from "../styles/Team.module.css";
import Image from "next/image";
function About() {
  return (
    <div>
      <Head>
        <title>J&S Logistics | Our Team</title>
        <meta name="description" content="J&S Logistics team page" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <h1 className={styles.h1}>Our Team</h1>
    </div>
  );
}
export default About;
