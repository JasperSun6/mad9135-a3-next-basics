import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.container}>
      <a href="/">
        <Image src="/images/logo.png" width={50} height={40} alt="logo" />
      </a>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/team">Team</Link>
        <Link href="/works">Work</Link>
      </div>
    </nav>
  );
}

export default Navbar;
