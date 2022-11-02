import axios from "axios";

const instance = axios.create({
  baseURL: "https://milestone-9ebad-default-rtdb.firebaseio.com",
  headers: {
    authorization: "firebase authorization",
  },
});

instance.interceptors.response.use((response) => {
  let formated_data = [];
  Object.entries(response.data).forEach((d) => {
    let obj = { id: d[0], ...d[1] };
    formated_data.push(obj);
  });
  response.data = formated_data;
  return response;
});

instance.interceptors.request.use((config) => {
  // console.log(config);
  // config.headers.authorization = "test";
  return config;
});

export default instance;
