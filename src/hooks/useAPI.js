import axios from "axios";

const useAPI = () => {
  const BASE_URL = "https://fakestoreapi.com";

  // Get products from /products endpoint with axios
  const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  };

  const getSingleProduct = async (id) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  };

  return {
    getProducts,
    getSingleProduct,
  };
};

export default useAPI;