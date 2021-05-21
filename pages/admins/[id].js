import React from "react";

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  const paths = data.map((admin) => {
    return {
      params: { id: admin.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/` + id
  );
  const data = await response.json();

  return {
    props: { admin: data },
  };
};

const AdminDetail = ({ admin }) => {
  return (
    <div>
      <h1>{admin.name}</h1>
      <p>{admin.email}</p>
      <p>{admin.website}</p>
      <p>{admin.address.city}</p>
    </div>
  );
};

export default AdminDetail;
