import axios from "axios";

export const fetchProducts = async () => {
  try {
    const res = await axios("https://fakestoreapi.com/products");
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    const res = await axios(`https://fakestoreapi.com/products/${id}`);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const submitForm = async (formData) => {
  try {
    const res = await axios.put(
      `https://fakestoreapi.com/products/${id}`,
      formData
    );
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
