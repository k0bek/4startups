import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-white text-black ">
      <p className="text-lg">Oooops something went wrong</p>
      <Link href="/login">Go to the login page</Link>
    </div>
  );
};

export default page;
