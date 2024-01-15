import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Product";

const AxiosMethod = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setData]);
  return (
    <div className="container">
      <h2 className="title">Stor's products</h2>
      <div className="products">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data?.data?.map((item) => <Product item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default AxiosMethod;
