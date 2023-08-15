import axios from "axios";

const API_URL = "http://localhost:5000";

export const savePost = async (payLoad) => {
  try {
    return await axios.post('/createpost', payLoad);
  } catch (error) {
    console.log("Error ", error.message);
    return error.response.data;
  }
};

export const saveResponse = async (payLoad) => {
  try {
    return await axios.post("/cv_rank", payLoad);
  } catch (error) {
    console.log("Error ", error.message);
    return error.response.data;
  }
};
export const getAllPosts = async () => {
  try {
      let a = await axios.get('/list_jobs');
      return a.data;
  } catch (error) {
    console.log("Error ", error.message);
    return error.response.data;
  }
};
