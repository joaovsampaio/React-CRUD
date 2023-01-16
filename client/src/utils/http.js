import Axios from "axios";

export const getProducts = async () => {
  const response = await Axios.get("http://localhost:3001/products");
  return response.data;
};

export const queryDb = async (column) => {
  const response = await Axios.get(`http://localhost:3001/products/${column}`);
  return response.data;
};

export const dbDeleteProduct = async (id) => {
  const response = await Axios.delete(`http://localhost:3001/products/${id}`);
  return response.data;
};

export const dbUpdateProduct = async (newProduct, newPrice, id) => {
  return await Axios.put("http://localhost:3001/products", {
    product: newProduct,
    price: newPrice,
    id: id,
  });
};
