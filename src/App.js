import { useState } from 'react';
import Navbar from './Navbar';
import Post from './Post';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState('');

  const buildPosts = (posts) => {
    return JSON.parse(posts).map((post) => (
      <Post
        title={post.title}
        body={post.body}
        author={post.author}
        stamp={post.timestamp}
      />
    ));
  };

  const getPosts = async () => {
    const raw = await fetch('https://odingblogapi.herokuapp.com/api/posts');
    const json = await raw.json();

    setPosts(JSON.stringify(json.data.posts));
    setIsLoading(false);
  };

  getPosts();

  return (
    <div className="container mx-auto max-w-3xl">
      <Navbar />
      <div>{posts ? buildPosts(posts) : ''}</div>
    </div>
  );
}

export default App;
