function Post(props) {
  const { title, body, author, stamp } = props;
  return (
    <div class="container mb-10 border-l-8 border-blue-500 px-8">
      <a href="/" class="font-bold text-3xl mb-3 block">
        {title}
      </a>
      <p class="text-gray-500 mb-3">{body}</p>
      <p class="text-gray-400 text-sm mb-3">{`${author} · ${stamp}`}</p>
      <button
        class="
			bg-green-100
			hover:bg-green-200
			transition
			duration-200
			p-3
			rounded
			text-green-900
			font-bold
			text-sm
		"
      >
        Read More
      </button>
    </div>
  );
}

export default Post;
