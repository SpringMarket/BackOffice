import axios from "axios";

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: "http://3.38.181.200",
});

instance.interceptors.request.use((config) => {
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export const requestSignup = async (userInfo) => {
  await instance.post("/api/signup", userInfo);
};

export const requestLogin = async (userInfo) => {
  const response = await instance.post("/api/login", userInfo);

  return response;
};

export const reqeustDashboard = async (filter) => {
  const response = await instance.get("/api/products/", {
    params: filter,
  });

  return response;
};

export const reqeustDetail = async (productId) => {
  const response = await instance.get("/api/products/"+productId);
  return response;
};

export const reqeustMypage = async () => {
  const response = await instance.get("/api/cart/show");
  return response;
};

export const reqeustOrderlist = async () => {
  const response = await instance.get("/api/product/list");
  return response;
};

export const reqeustOrderCart = async (orderList) => {
  const response = await instance.post("/api/cart/order");
  return response;
};

export const reqeustRankingBoard1 = async () => {
  const response = await instance.get("/api/rank/list/1");
  return response;
};

export const reqeustRankingBoard2 = async () => {
  const response = await instance.get("/api/rank/list/2");
  return response;
};

export const reqeustRankingBoard3 = async () => {
  const response = await instance.get("/api/rank/list/3");
  return response;
};

export const reqeustRankingBoard4 = async () => {
  const response = await instance.get("/api/rank/list/4");
  return response;
};

export const reqeustRankingBoard5 = async () => {
  const response = await instance.get("/api/rank/list/5");
  return response;
};

export const reqeustAddCart = async (productId) => {
  const response = await instance.get("/api/cart/add/"+productId);
  return response;
};

export const reqeustOrder = async (orderRequestDto) => {
  const response = await instance.post("/api/product/order", orderRequestDto);
  return response;
};

export const reqeustDelCart = async (productId) => {
  const response = await instance.get("/api/cart/delete/"+productId);
  return response;
};
