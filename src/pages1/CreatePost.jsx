import { useState } from "react";
import { Box, Typography, styled, TextField, Button } from "@mui/material";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";

import { savePost } from "../services1/api";
import { useNavigate } from "react-router-dom";
import { routhPath } from "../routes1/routes";

const Component = styled(Box)({
  padding: "100px 200px",
  background: "#f5f5f5",
});

const Container = styled(Box)({
  display: "flex",
  background: "#ffffff",
  borderRadius: 20,
  justifyContent: "space-between",
  alignItems: "center",
  padding: " 0 80px",
  "& > p": {
    fontSize: 35,
    fontWeight: 700,
    opacity: 0.7,
  },
});
const FormWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  padding: 20,
  background: "#ffffff",
  borderRadius: "20px",
  "& > *": {
    marginTop: "20px !important ",
  },
});

const defaultObj = {
  profile: "",
  type: "",
  description: "",
  experience: "",
  technology: [],
  salary: "",
};

const options = {
  type: ["Online", "Offline"],
  experience: ["0-2 Years", "3-5 Years", "5 Years or more"],
  technology: [
    "Java",
    "JavaScript",
    "React",
    "Angular",
    "Node.js",
    "Docker",
    "AWS",
    "HTML",
    "CSS",
  ],
  salary: [
    "Rs 0-300000",
    "Rs 300000-500000",
    "Rs 500000-800000",
    "Rs 800000-1000000",
    "Rs 1000000-1500000",
    "Rs 1500000-2000000",
    "Rs 2000000 or more",
  ],
};
const CreatePost = () => {
  const [data, setData] = useState(defaultObj);

  const navigate = useNavigate();

  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVUCBKoUuQWYKJTx8E9GZJcAXtxesFZpRwPw&usqp=CAU";
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const saveJob = async () => {
    await savePost(data);
    navigate(routhPath.post);
  };
  return (
    <>
      <Header />
      <Component>
        <Container>
          <Typography>Check for job Description</Typography>
          <img src={image} alt="axis" />
        </Container>
        <FormWrapper>
          <TextField
            placeholder="Job title"
            name="profile"
            onChange={handleChange}
          />
          <Dropdown
            id="job-type-label"
            value={data.type}
            handleChange={handleChange}
            name="type"
            label="Job Type"
            options={options.type}
          />

          <TextField
            placeholder="Job description"
            name="description"
            onChange={handleChange}
          />
          <Dropdown
            id="experience-label"
            value={data.experience}
            handleChange={handleChange}
            name="experience"
            label="Experience"
            options={options.experience}
          />
          <Dropdown
            id="technology-label"
            value={data.technology}
            handleChange={handleChange}
            name="technology"
            label="Technology"
            options={options.technology}
            multiple
          />
          <Dropdown
            id="salary-label"
            value={data.salary}
            handleChange={handleChange}
            name="salary"
            label="Salary"
            options={options.salary}
          />

          <Button onClick={() => saveJob()} variant="contained">
            Save Job
          </Button>
        </FormWrapper>
      </Component>
    </>
  );
};

export default CreatePost;
