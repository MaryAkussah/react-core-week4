import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
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
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/posts' element={<Posts />} /> 
    </Routes>
   </div>
  )
}

export default App;
