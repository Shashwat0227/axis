import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getAllPosts } from "../services1/api";
import { Box, InputBase } from "@mui/material";
const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    const getData = async () => {
      await getAllPosts();
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <Box>
        <InputBase placeholder="Search by Job title" />
      </Box>
      <Box>{}</Box>
    </>
  );
};
export default AllPost;
