import React from "react";
import { useGetProductsQuery } from "../../redux/products";
import Product from "../Product";

const RTKQuery = () => {
  const { isLoading, data, error: isError } = useGetProductsQuery();
  //   const [createProduct, { data, isLoading, error }] =
  //     useCreateProductMutation();

  //   const handleClick = async (formData) => {
  //     await createProduct(formData);
  //   };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong!!</p>;
  }

  return (
    <div className="container">
      <h2 className="title">Stor's products</h2>
      <div className="products">
        {data && data?.map((item) => <Product item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default RTKQuery;
