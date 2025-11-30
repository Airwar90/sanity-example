import { BrowserRouter, Route,  Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import SingleBlogPage from "./pages/SingleBlogPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter> 
     <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/blog/:slug" element={<SingleBlogPage/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
