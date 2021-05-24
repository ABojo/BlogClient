import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Loader from './Loader';
import formatDate from './utils/formatDate';

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

const buildComments = (post) => {
  const { comments } = JSON.parse(post);
  console.log(comments);

  return (
    <React.Fragment>
      <div className="bg-gray-100 p-5 mb-10 rounded">
        <form className="mx-auto">
          <input
            type="text"
            placeholder="Enter your name"
            className="px-5 py-5 rounded shadow-inner resize-none w-full text-sm block mb-3"
            required
          />
          <textarea
            placeholder="Enter a comment"
            className="px-5 py-5 rounded shadow-inner resize-none w-full text-sm block mb-3"
            required
          />
          <input
            onClick={(e) => e.preventDefault()}
            type="submit"
            value="Add Comment"
            className="rounded font-bold bg-blue-100 hover:bg-blue-200 text-blue-900 p-3 text-sm cursor-pointer transition duration-200 shadow block ml-auto"
          />
        </form>
      </div>
      <div class="mb-10">
        <h1 class="text-3xl mb-3 text-gray-900">
          Comments ({comments.length})
        </h1>
        {comments.reverse().map((com) => {
          return (
            <div className="border-l-8 border-blue-500 px-8 mb-3">
              <h1 class="text-xl text-gray-900">{com.name}</h1>
              <h1 class="text-gray-400 text-lg mb-3">{com.body}</h1>
              <h1 class="text-gray-300">{formatDate(com.timestamp)}</h1>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const buildPostAndComments = (post) => {
  return (
    <React.Fragment>
      {buildPost(post)}
      {buildComments(post)}
    </React.Fragment>
  );
};

function FullPost() {
  const [post, setPost] = useState('');
  const { id } = useParams();

  getPost(id, setPost);

  return <div>{post ? buildPostAndComments(post) : <Loader />}</div>;
}

export default FullPost;
