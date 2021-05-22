import { useState } from 'react';
import Navbar from './Navbar';
import Post from './Post';
import Loader from './Loader';

function App() {
  const [posts, setPosts] = useState('');

  const buildPosts = (posts) => {
    return JSON.parse(posts).map((post) => {
      const { body } = post;
      return (
        <Post
          title={post.title}
          body={`${body.length > 200 ? body.slice(0, 200) : body}...`}
          author={post.author}
          stamp={post.timestamp}
        />
      );
    });
  };

  const getPosts = async () => {
    const raw = await fetch('https://odingblogapi.herokuapp.com/api/posts');
    const json = await raw.json();

    setPosts(JSON.stringify(json.data.posts));
  };

  getPosts();

  return (
    <div className="container mx-auto max-w-3xl">
      <Navbar />
      <div>{posts ? buildPosts(posts) : <Loader />}</div>
    </div>
  );
}

export default App;
