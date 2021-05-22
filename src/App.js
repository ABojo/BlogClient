import { useState } from 'react';
import Navbar from './Navbar';
import Post from './Post';
import Loader from './Loader';

const buildPosts = (posts) => {
  return JSON.parse(posts).map((post) => {
    const { body } = post;
    return (
      <Post
        id={post._id}
        title={post.title}
        body={`${body.length > 200 ? body.slice(0, 200) : body}...`}
        author={post.author}
        stamp={post.timestamp}
      />
    );
  });
};

const getPosts = async (stateSetter) => {
  const raw = await fetch('https://odingblogapi.herokuapp.com/api/posts');
  const json = await raw.json();

  stateSetter(JSON.stringify(json.data.posts));
};

function App() {
  const [posts, setPosts] = useState('');

  //Run async function that will call setPosts with the retrieved data
  getPosts(setPosts);

  return (
    <div className="container mx-auto max-w-3xl">
      <Navbar />
      <div>{posts ? buildPosts(posts) : <Loader />}</div>
    </div>
  );
}

export default App;
