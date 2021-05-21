import React from "react";
import styles from "../../styles/Admins.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  return {
    props: {
      admins: data,
    },
  };
};

const Admins = ({ admins }) => {
  return (
    <div>
      <h1>All Admins</h1>
      {admins.map((admin) => (
        <Link key={admin.id} href={"/admins/" + admin.id}>
          <a className={styles.single}>
            <h3>{admin.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Admins;
