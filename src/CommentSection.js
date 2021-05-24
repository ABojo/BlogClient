import React from 'react';
import formatDate from './utils/formatDate';
import { useState } from 'react';

const postComment = async (postId, name, body) => {
  const raw = await fetch('https://odingblogapi.herokuapp.com/api/comments/', {
    method: 'POST',
    body: JSON.stringify({ postId, name, body }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const json = await raw.json();
  return json.data.comment;
};

function CommentSection(props) {
  const { postId } = props;
  const [comments, setComments] = useState(props.comments);
  const [commentName, setCommentName] = useState('');
  const [commentBody, setCommentBody] = useState('');

  return (
    <React.Fragment>
      <div className="bg-gray-100 p-5 mb-10 rounded">
        <div className="mx-auto">
          <input
            onChange={(e) => {
              setCommentName(e.currentTarget.value);
            }}
            value={commentName}
            type="text"
            placeholder="Enter your name"
            className="px-5 py-5 rounded shadow-inner resize-none w-full text-sm block mb-3"
            required
          />
          <textarea
            onChange={(e) => {
              setCommentBody(e.currentTarget.value);
            }}
            value={commentBody}
            placeholder="Enter a comment"
            className="px-5 py-5 rounded shadow-inner resize-none w-full text-sm block mb-3"
            required
          />
          <input
            onClick={async () => {
              if (commentName && commentBody) {
                const comment = await postComment(
                  postId,
                  commentName,
                  commentBody
                );

                setCommentName('');
                setCommentBody('');
                setComments([...comments, comment]);
              }
            }}
            type="submit"
            value="Add Comment"
            className="rounded font-bold bg-blue-100 hover:bg-blue-200 text-blue-900 p-3 text-sm cursor-pointer transition duration-200 shadow block ml-auto"
          />
        </div>
      </div>
      <div class="mb-10">
        <h1 class="text-3xl mb-3 text-gray-900">
          Comments ({comments.length})
        </h1>
        {comments
          .map((com) => {
            return (
              <div className="border-l-8 border-blue-500 px-8 mb-3">
                <h1 class="text-xl text-gray-900">{com.name}</h1>
                <h1 class="text-gray-400 text-lg mb-3">{com.body}</h1>
                <h1 class="text-gray-300">{formatDate(com.timestamp)}</h1>
              </div>
            );
          })
          .reverse()}
      </div>
    </React.Fragment>
  );
}

export default CommentSection;