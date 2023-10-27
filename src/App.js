
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import Home from './Pages/home';
import Blogs from './Pages/blogs';
import CreateBlog from './Pages/createblog';
import { BlogContext } from './Pages/BlogContext';
import { useState } from 'react';
import ReadBlogContent from './Pages/ReadBlogContent';
import blogData from './blogData';

function App() {
  
  const [blog,setBlog]=useState(blogData);
  return (
    <div className="App">
      <BlogContext.Provider value={{blog,setBlog}}>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/createblog" element={<CreateBlog/>} />
      <Route path='/blogs'   element={<Blogs/>} />
      <Route path='/ReadBlogContent/:id'   element={<ReadBlogContent/>} />
      </Routes>
      </BlogContext.Provider>
    </div>
  );
}

export default App;
