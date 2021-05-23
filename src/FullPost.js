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
    <div className="mb-10">
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      <h2 className="text-gray-400 text-md mb-3">
        {author} · {ts.getMonth() + 1}/{ts.getDate()}
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
      {post ? buildPost(post) : <Loader />}
      <div className="bg-gray-100 p-5">
        <form className="mx-auto">
          <input
            type="text"
            placeholder="Enter your name"
            className="px-5 py-5 rounded shadow-inner resize-none w-full text-sm block mb-3"
            required
          />
          <textarea
            placeholder="Enter a Comment"
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
    </div>
  );
}

export default FullPost;
