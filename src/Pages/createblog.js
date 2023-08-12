import React, { useContext} from "react";
import './widget/widget.css';
import {Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Blogs from "./blogs";
import { BlogContext } from "./BlogContext";



export default function CreateBlogWidget() {

  const navigate=useNavigate();
  const {blog,setBlog}=useContext(BlogContext);
  
function blogmanage(e){
 const blogname=e.target.blogname.value;
 const blogcontent=e.target.blogcontent.value;
//  console.log(blogname);
//  console.log(blogcontent);
 setBlog([
  ...blog,
  {title:blogname,content:blogcontent},
 

 ]);
 alert("Form Submitted Successfully");
 return navigate("/blogs");

}
console.log(blog);



  return (
    
    <div className="form-main">
      <div className="blog-form">
      <form onSubmit={(e)=>{
        e.preventDefault();
        blogmanage(e)}}>
        <h3 style={{fontWeight:"bold",textAlign:"center",fontFamily: "Arial, sans-serif",marginBottom:"1.5em"}}>CREATE YOUR BLOG </h3>
    
        <div className="mb-3">
          <label> Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="This  title will be displayed at the top of your blog"
            name="blogname"
          required/>
        </div>
        <div className="mb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label> Content</Form.Label>
        <Form.Control as="textarea" rows={7} placeholder="Blog Content"  name="blogcontent" required />
      </Form.Group>
        </div>
        <div className="mb-3">
        <p> &nbsp; </p>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary py-3 px-3" >
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
