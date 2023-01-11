import { useRouter } from "next/router";
import React from "react";
import Home from "..";

const Details = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <>
      <p className="bg-purple-600">This is a new page on index:{id}</p>
      <Home />
    </>
  );
};

export default Details;
