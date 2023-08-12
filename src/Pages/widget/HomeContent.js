import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function HomeContent() {
  const navigate=useNavigate();
  return (
    <div className="bg">
      <div className="homecontent">
        <h2 className="homecontent-head1">Publish your passions, your way</h2>
        <p className="homecontent-head2">
          Create a unique and beautiful blog easily
        </p>
        <br />
        <Button className="btn1" onClick={()=>navigate("/createblog")}>CREATE YOUR BLOG</Button>
        &nbsp;&nbsp;
        <Button variant="primary" className="btn2" onClick={()=>navigate("/blogs")}>
          READ NEW BLOGS
        </Button>
      </div>
    </div>
  );
}
