import React, {useState} from 'react'
import Header from '../components/Header';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    id: uuidv4(),
    title: "",
    authorName: "",
    description: "",
    cover: "",
  });
  const [file, setFile] = useState()

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  // converting image to base64
  function encodeBase64(elm, cb) {
    var file = elm.files[0];
    var imgReader = new FileReader();
    imgReader.onloadend = function() {
      console.log('Base64 Format', imgReader.result);
      cb(imgReader.result)
    }
    imgReader.readAsDataURL(file);
  }

  const handleFile = (e) => {
    encodeBase64(e.target, (base64str) => setData({...data, cover: base64str}))
  }

  const submitBlogPost = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/blogs", data);
      navigate('/');

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Header />
      <form encType='multipart/form-data' onSubmit={submitBlogPost} className="container p-5">
        <div className="mb-3 px-5">
          <label className="form-label">Author Name</label>
          <input 
            type="text" 
            className="form-control w-50" 
            placeholder="David Jonathan"
            value={data.authorName}
            name="authorName"
            onChange= {handleChange}
          />
        </div>
        <div className="mb-3 px-5">
          <label className="form-label">Blog Title</label>
          <input 
            type="text" 
            className="form-control w-50" 
            placeholder="David Jonathan"
            value={data.title}
            name="title"
            onChange= {handleChange}
          />
        </div>
        <div className="mb-3 px-5">
          <label className="form-label">Image</label>
          <input 
            className="form-control w-50" 
            type="file"
            onChange={handleFile}
          />
        </div>
        <div className="mb-3 px-5">
          <label className="form-label">Description:</label>
          <textarea 
            className="form-control w-50" 
            rows="3"
            name='description'
            value={data.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddBlog;