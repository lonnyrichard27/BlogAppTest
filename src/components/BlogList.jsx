import axios from 'axios';
import React, {useState, useEffect} from 'react'
import BlogItem from './BlogItem';

const BlogList = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetchBlogs();
  }, [])

  const fetchBlogs = () => {
    axios.get("http://localhost:3000/blogs")
    .then(res => setBlogs(res.data))
  }
  
  return (
    <div className='container'>
      <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-md-4 col-12" key={index}>
            <BlogItem blog={blog} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList;