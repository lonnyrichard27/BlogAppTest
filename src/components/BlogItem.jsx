import React from 'react'
import { Link } from 'react-router-dom';

const BlogItem = ({ blog:{ id, description, title, authorName,cover} }) => {
  return (
    <div className="card p-5 shadow-lg p-3 mb-5 bg-body rounded border-0">
      <img src={cover} className="my-3" height="200" width="200" alt="" />
      <div className="card-body">
        <h5 className="card-title fw-bolder">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <h4>Author: {authorName}</h4>
      <Link to={`/blog/${id}`} className='text-decoration-none btn btn-primary'>View</Link>
    </div>
  )
}

export default BlogItem;