import axios from "axios";

const instance = axios.create({
  baseURL: "https://ruin-a-wish.firebaseio.com/",
});

export default instance;
