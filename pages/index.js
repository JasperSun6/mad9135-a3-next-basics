import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>J&S Logistics | Home</title>
        <meta name="description" content="J&S Logistics home page" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main className={styles.main}>
        <p className={styles.title}>J&S Logistics</p>
        <Image
          src="/images/banner.png"
          sizes="100vw"
          width="0"
          height="0"
          style={{ width: "100%", height: "auto" }}
          alt="banner"
        />
        <h1 className={styles.subTitle}>LOGISTICS BEYOND YOUR EXPECTATIONS</h1>
        <p className={styles.paragraph}>
          True to Our Word We are Committed to deliver ever Load Safely and on
          Time
        </p>
        <div className={styles.weDo}>
          <h2 className={styles.weDoTitle}>WHAT WE DO</h2>
          <p className={styles.weDoPara}>
            We are asset based service provider with a dedicated team trained to
            offer you the most optimized solution for your business. We offer a
            wide range of over the road services like Full Truck Load (FTL),
            Less Than Truckload (LTL), specialized and expedited.
          </p>
          <p className={styles.weDoPara}>
            If you needs include fresh produce, pharmaceuticals, fresh or frozen
            meats, papers rolls, Automotive or any other dry or Temperature
            Controlled Freight, We&apos;ve got you covered. We pride ourselves
            on competitive and on-time services.
          </p>
        </div>
      </main>
    </div>
  );
}
