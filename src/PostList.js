import { useState } from 'react';
import Post from './Post';
import Loader from './Loader';

const buildPosts = (posts) => {
  return JSON.parse(posts)
    .reverse()
    .map((post) => {
      const { body } = post;
      const ts = new Date(post.timestamp);
      return (
        <Post
          url={`/posts/${post._id}`}
          title={post.title}
          body={`${body.length > 200 ? body.slice(0, 200) : body}...`}
          author={post.author}
          stamp={`${ts.getMonth() + 1}/${ts.getDate()}`}
        />
      );
    });
};

const getPosts = async (stateSetter) => {
  const raw = await fetch('https://odingblogapi.herokuapp.com/api/posts');
  const json = await raw.json();

  stateSetter(JSON.stringify(json.data.posts));
};

function PostList() {
  const [posts, setPosts] = useState('');

  //Run async function that will call setPosts with the retrieved data
  getPosts(setPosts);

  return <div>{posts ? buildPosts(posts) : <Loader />}</div>;
}

export default PostList;
