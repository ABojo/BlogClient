function Navbar() {
  return (
    <div className="flex flex-row items-baseline justify-between px-5 py-5 border-b border-grey-100 mb-10">
      <a href="/" className="text-3xl font-bold text-blue-500">
        <i className="fas fa-blog text-blue-500 bg-blue-100 p-4 rounded-full"></i>
      </a>

      <a
        href="/admin"
        className="
            right-1
            rounded
            px-5
            py-3
            bg-blue-500
            hover:bg-blue-600
            text-white text-sm
            font-bold
            transition
            duration-200
            text-lg
          "
      >
        Admin
      </a>
    </div>
  );
}

export default Navbar;
