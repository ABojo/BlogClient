import { Link } from 'react-router-dom';

function Post(props) {
  const { title, body, author, stamp, url } = props;
  return (
    <div className="container mb-10 border-l-8 border-blue-500 px-8">
      <Link to={url} className="font-bold text-3xl mb-3 block">
        {title}
      </Link>
      <p className="text-gray-500 mb-3">{body}</p>
      <p className="text-gray-400 text-sm mb-3 block">{`${author} · ${stamp}`}</p>
      <Link
        to={url}
        className="		bg-green-100
			hover:bg-green-200
			transition
			duration-200
			p-3
			rounded
			text-green-900
			font-bold
			text-sm
      inline-block"
      >
        Read More
      </Link>
    </div>
  );
}

export default Post;
