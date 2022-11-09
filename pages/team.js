import Head from "next/head";
import styles from "../styles/Team.module.css";
import Image from "next/image";
import { useGlobalContext } from "../context/GlobalData";

function Team() {
  const teamList = useGlobalContext().teamList;
  return (
    <div className={styles.container}>
      <Head>
        <title>J&S Logistics | Our Team</title>
        <meta name="description" content="J&S Logistics team page" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <h1 className={styles.h1}>Our Team</h1>
      <ul className={styles.list}>
        {teamList.map((member) => (
          <li key={member.id} className={styles.listItem}>
            <Image
              className={styles.img}
              src={member.image}
              alt={member.name}
              width="160"
              height="192"
            />
            <div className={styles.info}>
              <p className={styles.name}>{member.name}</p>
              <p className={styles.position}>Role: {member.position}</p>
              <p className={styles.birthTitle}>D.O.B.</p>
              <p className={styles.birth}>{member.birth}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Team;
