import React, { useContext } from "react";
import { BlogContext } from "./BlogContext";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const navigate=useNavigate();
  const { blog} = useContext(BlogContext);
  console.log(blog);

  return (
    <div className="blogs-main">
      <div className="blogs-box">
        {blog.map((value, index) => (
          <Card
            key={index}
            style={{
              width: "22rem",
              margin: "30px 15px 0px",
              padding: "25px 3px",
            }}
          >
            <Card.Body>
              <Card.Title>
                <p>{value.title}</p>
              </Card.Title>
              <Button variant="primary" onClick={()=>navigate(`/ReadBlogContent/${index}`)}>Read More</Button>  
              {/* backtik important */}
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="blogs-backto">
      <p className="blogs-backto-para">Want To Create Another Blog ?</p>
      <Button className="blogs-btn" onClick={()=>navigate("/createblog")}>Create Blog</Button>
      <Button  className="blogs-btn bg-danger" onClick={()=>navigate("/")}>Home</Button>

    </div>
    </div>
  );
}
