import { useState } from 'react';
import Navbar from './Navbar';
import Post from './Post';

function App() {
  return (
    <div className="container mx-auto max-w-3xl">
      <Navbar />
      <div>
        <Post title={'Title'} body={'Body'} author={'AB'} stamp={'5/22'} />
      </div>
    </div>
  );
}

export default App;
