import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

const BlogDetails = () => {
  const { id } = useParams()
  const [blogDetails, setBlogDetails] = useState({})

  useEffect(() => {   
    getBlogDetail();
  }, [])
  
  const getBlogDetail = async() => {
    const res = await axios.get(`http://localhost:3000/blogs/${id}`)
    setBlogDetails(res.data)
  }

  return (
    <>
      <Header />
      <div className="container px-5 mt-5">
        <h1 className="lead">{blogDetails.authorName}</h1>
        <p className="fw-bold">{blogDetails.title}</p>
        <img height="" width="300" src={blogDetails.cover} alt="" />
        <h3 className="fw-bolder">{blogDetails.description}</h3>
      </div>
    </>
  )
}

export default BlogDetails