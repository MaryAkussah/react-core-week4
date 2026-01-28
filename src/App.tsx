import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import MainLayout from "./pages/MainLayout";
import PostDetails from "./pages/PostDetails";
import './App.css'

function App() {
  return (
   <div>
    <nav>
      
      <Link to ="/">Home</Link> | {""}
      <Link to ="/about">About</Link> | {""}
      <Link to ="/posts">Posts</Link> | {""}
      

    </nav>

    <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} /> 
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="login" element={<Login />} />

          </Route>
    </Routes>
   </div>
  )
}

export default App;
