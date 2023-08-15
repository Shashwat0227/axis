import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getAllPosts } from "../services1/api";
import { Box, InputBase, styled } from "@mui/material";
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


const AllPost = () => {
    const [posts, setPosts] = useState([]);
    const [text, setText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    let data;
    useEffect(() => {
        const getData = async () => {
            data = await getAllPosts();
            setPosts(data);
            setIsLoading(true);
        };
        getData();

    }, []);
    if(!isLoading){
        return (<>
                  <Header/>
                  <Container>
                    <Box>
                      <h2>Loading....</h2>
                    </Box>   
                  </Container>
                </>);
    }
    console.log(posts);
    return (
        <>
          <Header />
          <Container>
            <Box>
              <InputBase placeholder="Search by Job title" />
            </Box>
            <Box>{}</Box>            
          </Container>
        </>
    );
};
export default AllPost;
