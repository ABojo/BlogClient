function Navbar() {
  return (
    <div className="flex flex-row items-baseline justify-between px-5 py-5 border-b border-grey-100 mb-10">
      <a href="/" className="text-3xl">
        Blog Client
      </a>
      <a
        href="https://github.com/ABojo/BlogClient"
        className="text-3xl font-bold text-blue-500"
      >
        <i className="fab fa-github text-blue-500 bg-blue-100 p-4 rounded-full"></i>
      </a>
    </div>
  );
}

export default Navbar;
