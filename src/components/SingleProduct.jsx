import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../fetchData/fetchProsuct";
import { useGetSingleProductQuery } from "../redux/products";

const SingleProduct = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  const { id } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       // const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  //       // const data = await res.json();
  //       const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  //       setData(res?.data);
  //     } catch (error) {
  //       throw new Error(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [setData]);

  // const { data, isPending, isError } = useQuery({
  //   queryKey: ["product", id],
  //   queryFn: () => fetchSingleProduct(id),
  // });

  const { mutateAsync, isPending, isError } = useMutation({
    mutationKey: ["product", id],
    mutationFn: submitForm,
  });

  const handleSubmit = async () => {
    await mutateAsync(formData);
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong!!</p>;
  }

  return (
    <section className="product-container">
      <div className="single-product">
        <img src={data?.image} alt="product-image" />
        <div>
          <h2>{data?.title}</h2>
          <p>{data?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
