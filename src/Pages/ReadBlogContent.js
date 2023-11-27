// import React, { useContext } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { BlogContext } from './BlogContext';
// import {Button} from 'react-bootstrap';

// export default function ReadBlogContent() {
//     const navigate =useNavigate();
//     const {id}=useParams();
//     const {blog}=useContext(BlogContext);
//   return (
//     <div className='readblogmain'>
      
//         <h1 className='readblog-mainhead'>{blog[id].title}</h1>
//         <div className='readblog-author'>
//         <hr/>
//             <span style={{ fontFamily: "sans-serif",marginLeft:"1em" }}><i class='bx bx-edit-alt' style={{fontSize:"1.2em"}}>:</i>{blog[id].author}</span>
//             <span className='readblog-date'><b>Published:{blog[id].date}</b></span>
//             <hr/>
//         </div>
//         <div className='readblog'>
//         <p className='readblogcontent'>{blog[id].content}</p>
//         <Button variant="success" onClick={()=>navigate("/blogs")} style={{marginTop:"5em",padding:"10px 14px"}} >Back To Blogs</Button>
//         </div>
   
//     </div>
//   )
// }



import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogContext } from './BlogContext';
import { Button } from 'react-bootstrap';

export default function ReadBlogContent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { blog } = useContext(BlogContext);

  // Function to split content into paragraphs of up to 8 sentences each
  const splitIntoParagraphs = (text, sentencesPerParagraph) => {
    const sentences = text.split(/[.]/);
    const paragraphs = [];
    
    for (let i = 0; i < sentences.length; i += sentencesPerParagraph) {
      const paragraph = sentences.slice(i, i + sentencesPerParagraph).join('. ');
      paragraphs.push(paragraph);
    }

    return paragraphs;
  };

  const paragraphs = splitIntoParagraphs(blog[id].content, 8);

  return (
    <div className='readblogmain'>
      <h1 className='readblog-mainhead'>{blog[id].title}</h1>
      <div className='readblog-author'>
        <hr />
        <span style={{ fontFamily: 'sans-serif', marginLeft: '1em' }}>
          <i className='bx bx-edit-alt' style={{ fontSize: '1.2em' }}>:</i>
          {blog[id].author}
        </span>
        <span className='readblog-date'>
          <b>Published:{blog[id].date}</b>
        </span>
        <hr />
      </div>
      <div className='readblog'>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className='readblogcontent'>{paragraph}</p>
        ))}
        <Button
          variant='success'
          onClick={() => navigate('/blogs')}
          style={{ marginTop: '1em', padding: '10px 14px' }}
        >
          Back To Blogs
        </Button>
      </div>
    </div>
  );
}
