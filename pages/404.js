import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PageNotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //   router.go(-1); //if -1 go back if +1 push to
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>The page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
