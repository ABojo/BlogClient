import { useState } from 'react';
import Navbar from './Navbar';
import PostList from './PostList';

function App() {
  return (
    <div className="container mx-auto max-w-3xl">
      <Navbar />
      <PostList />
    </div>
  );
}

export default App;
