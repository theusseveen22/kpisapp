import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { Routes, Route} from 'react-router-dom'
import Administration from './pages/Administration';
import Search from './pages/Search';
import Thanks from './pages/Thanks'
import './style.css'

function App() {
  return (
    
    <div className="App">
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/admin" element={<Administration />}/>
          <Route exact path="/search" element={<Search />}/>
          <Route exact path="/thanks" element={<Thanks />}/>
        </Routes>
    </div>
  );
}

export default App;
