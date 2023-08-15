import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getAllPosts } from "../services1/api";
import {
  Box,
  InputBase,
  Card,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";

const SearchWrapper = styled(Box)({
  marginTop: 84,
  display: "flex",
  justifyContent: "center",
  "&>div": {
    width: "500px",
    height: "45px",
    border: "1px solid #000000",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    marginRight: 20,
  },
});

const PostWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  marginTop: "50px",
  flexWrap: "wrap",
  justifyContent: "center",
});
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
      <SearchWrapper>
        <InputBase placeholder="Search by Job title" />
      </SearchWrapper>
      <PostWrapper>
        <Typography>
          <Card
            style={{
              border: " 2px solid #000000 ",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            <CardContent>
              <h3>Android developer</h3>
              <ul>
                <Typography
                  style={{
                    color: "#6f6f6f",
                    margin: " 10px 0px",
                    width: "30%",
                  }}
                >
                  {" "}
                  <li> Job description : Mern stack</li>
                </Typography>
                <Typography>
                  <li> Job description : Mern stack</li>
                </Typography>
                <Typography>
                  <li> Job description : Mern stack</li>
                </Typography>
                <Typography>
                  <li> Job description : Mern stack</li>
                </Typography>
              </ul>
            </CardContent>
          </Card>
        </Typography>
        <Card
          style={{
            border: " 2px solid #f5f5 ",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
          <CardContent>
            <h3>Machine Learning </h3>
            <ul>
              <Typography
                style={{ color: "#6f6f6f", margin: " 10px 0px", width: "30%" }}
              >
                {" "}
                <li> Job description : Machine learning</li>
              </Typography>
              <Typography>
                <li> Job description : Mern stack</li>
              </Typography>
              <Typography>
                <li> Job description : Mern stack</li>
              </Typography>
              <Typography>
                <li> Job description : Mern stack</li>
              </Typography>
            </ul>
          </CardContent>
        </Card>
        <Typography>
          <Card
            style={{
              border: " 2px solid #000000 ",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            <CardContent>
              <h3>Mern Stack developer </h3>
              <ul>
                <Typography
                  style={{
                    color: "#6f6f6f",
                    margin: " 10px 0px",
                    width: "30%",
                  }}
                >
                  {" "}
                  <li> Job description : Mern stack</li>
                </Typography>
                <Typography>
                  <li> Job description : Mern stack</li>
                </Typography>
                <Typography>
                  <li> Job description : Mern stack</li>
                </Typography>
                <Typography>
                  <li> Job description : Mern stack</li>
                </Typography>
              </ul>
            </CardContent>
          </Card>
        </Typography>
        <Typography>
          <Card
            style={{
              border: " 2px solid #f5f5 ",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            <CardContent>
              <h3>JAVA developer </h3>
              <ul>
                <Typography
                  style={{
                    color: "#6f6f6f",
                    margin: " 10px 0px",
                    width: "30%",
                  }}
                >
                  {" "}
                  <li> Job description : Mern stack</li>
                </Typography>
                <Typography>
                  <li> Job description : Mern stack</li>
                </Typography>
                <Typography>
                  <li> Job description : Mern stack</li>
                </Typography>
                <Typography>
                  <li> Job description : Mern stack</li>
                </Typography>
              </ul>
            </CardContent>
          </Card>
        </Typography>
      </PostWrapper>
    </>
  );
};
export default AllPost;
