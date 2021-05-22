function Navbar() {
  return (
    <div className="flex flex-row items-baseline justify-between px-5 py-5 border-b border-grey-100 mb-10">
      <a href="/" className="text-3xl font-bold text-blue-500">
        <i className="fas fa-blog text-blue-500 bg-blue-100 p-4 rounded-full"></i>
      </a>

      <div className="relative">
        <input
          type="text"
          placeholder="Search posts"
          className="bg-gray-100 rounded-full pl-8 pr-28 py-4 shadow-inner w-64"
        />
        <button
          className="
              none
              search
              absolute
              right-1
              rounded-full
              px-5
              py-3
              bg-blue-500
              hover:bg-blue-600
              text-white text-sm
              font-bold
              transition
              duration-200
            "
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Navbar;
