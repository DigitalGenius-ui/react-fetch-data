import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import Product from "../Product";
import { fetchProducts } from "../../fetchData/fetchProsuct";

const ReactQuery = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["product"],
    queryFn: fetchProducts,
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong!!</p>;
  }
  return (
    <div className="container">
      <h2 className="title">Stor's products</h2>
      <div className="products">
        {data?.data?.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ReactQuery;
