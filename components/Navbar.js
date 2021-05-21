import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/admin.png" alt="Infinit Logo" width={150} height={150}/>
        {/* <h1>Admin List</h1> */}
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/admins/">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
