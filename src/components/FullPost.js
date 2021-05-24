import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Loader from './Loader';
import formatDate from '../utils/formatDate';
import CommentSection from './CommentSection';

const getPost = async (id, stateSetter) => {
  const raw = await fetch(`https://odingblogapi.herokuapp.com/api/posts/${id}`);
  const json = await raw.json();

  stateSetter(JSON.stringify(json.data.post));
};

const buildPost = (post) => {
  const { title, body, author, timestamp } = JSON.parse(post);
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      <h2 className="text-gray-400 text-md mb-3">
        {author} · {formatDate(timestamp)}
      </h2>
      <p className="text-gray-500 text-xl">{body}</p>
    </div>
  );
};

function FullPost() {
  const [post, setPost] = useState('');
  const { id } = useParams();

  getPost(id, setPost);

  return (
    <div>
      {post ? (
        <React.Fragment>
          {buildPost(post)}
          <CommentSection comments={JSON.parse(post).comments} postId={id} />
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default FullPost;
