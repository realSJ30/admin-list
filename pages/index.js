import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin List | Home</title>
        <meta name="keywords" content="admins"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          nulla dolorum, voluptatibus, repudiandae, ut quos ipsam aperiam
          suscipit delectus adipisci temporibus autem est eius? Placeat
          doloribus dolores voluptate rem praesentium?
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          nulla dolorum, voluptatibus, repudiandae, ut quos ipsam aperiam
          suscipit delectus adipisci temporibus autem est eius? Placeat
          doloribus dolores voluptate rem praesentium?
        </p>

        <Link href="/admins">
          <a className={styles.btn}>See Admins</a>
        </Link>
      </div>
    </>
  );
}
