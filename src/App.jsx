import { Route, Routes } from 'react-router-dom'
import "./App.css"
import AddBlog from './pages/AddBlog'
import BlogDetails from './pages/BlogDetails'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog/:id' element={<BlogDetails />} />
      <Route path='/addblog' element={<AddBlog />} />
    </Routes>
  )
}

export default App;
