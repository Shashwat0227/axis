import axios from "axios";

const API_URL = "http://localhost:8080";

export const savePost = async (payLoad) => {
  try {
    return await axios.post("${API_URL}/post", payLoad);
  } catch (error) {
    console.log("Error ", error.message);
    return error.response.data;
  }
};

export const saveResponse = async (payLoad) => {
  try {
    return await axios.post("${API_URL}/post", payLoad);
  } catch (error) {
    console.log("Error ", error.message);
    return error.response.data;
  }
};
export const getAllPosts = async () => {
  try {
    return await axios.get("${API_URL}/post");
  } catch (error) {
    console.log("Error ", error.message);
    return error.response.data;
  }
};
