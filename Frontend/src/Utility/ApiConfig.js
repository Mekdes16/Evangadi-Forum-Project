import axios from "axios";

const axiosBaseURL = axios.create({
  // local end point reference
  // baseURL: "https://evangadi-forum-2-yels.onrender.com" + "/api",

  // deployed endpoint reference
  baseURL: "https://evangadi-forum-project-xtw9.onrender.com" + "/api",
});

export default axiosBaseURL;
export const axiosImageURL = "https://evangadi-forum-2-yels.onrender.com";
