import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import { createHmacSha1 } from '@imagekit/nodejs/lib/crypto-utils.mjs';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<CreatePost/>} />
        <Route path="/about" element={<h1>hello</h1>} />
      </Routes>
    </Router>
  );
};

export default App;