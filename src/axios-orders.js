import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-de057.firebaseio.com/"
});

export default instance;
