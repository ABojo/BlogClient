import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Loader from './Loader';

const getPost = async (id, stateSetter) => {
  const raw = await fetch(`https://odingblogapi.herokuapp.com/api/posts/${id}`);
  const json = await raw.json();

  stateSetter(JSON.stringify(json.data.post));
};

const buildPost = (post) => {
  const { title, body, author, timestamp } = JSON.parse(post);
  const ts = new Date(timestamp);
  return (
    <React.Fragment>
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      <h2 className="text-gray-400 text-md mb-3">
        {author} · {ts.getMonth() + 1}/{ts.getDate()}
      </h2>
      <p className="text-gray-500 text-xl">{body}</p>
    </React.Fragment>
  );
};

function FullPost() {
  const [post, setPost] = useState('');
  const { id } = useParams();

  getPost(id, setPost);

  return <div>{post ? buildPost(post) : <Loader />}</div>;
}

export default FullPost;
