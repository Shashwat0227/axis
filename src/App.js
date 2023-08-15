import Home from "./pages1/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages1/CreatePost";
import { routhPath } from "./routes1/routes";
import AllPost from "./pages1/Allpost";
import CV from "./pages1/cvrank.js"
function App() {
  return (
    <Router>
      <Routes>
        <Route path={routhPath.home} element={<Home />} />
        <Route path={routhPath.create} element={<CreatePost />} />
        <Route path={routhPath.post} element={<AllPost />} />
        <Route path={routhPath.Cvrank} element={<CV />}/>
      </Routes>
    </Router>
  );
}

export default App;
