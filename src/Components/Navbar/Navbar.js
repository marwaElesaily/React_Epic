import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 fixed w-full z-10">
      <div className="container mx-auto px-6 md:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link className="text-gray-400 hover:text-gray-200" to="/">
              Discover
            </Link>
            <Link
              className="text-gray-400 hover:text-gray-200 ml-6"
              to="/browse"
            >
              Browse
            </Link>
            <Link className="text-gray-400 hover:text-gray-200 ml-6" to="/news">
              News
            </Link>
          </div>
          <div className="flex items-center">
            <form className="flex">
              <input
                className="bg-gray-900 text-gray-200 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <Link className="text-gray-400 hover:text-gray-200 ml-6" to="/cart">
              Cart
            </Link>
            <Link
              className="text-gray-400 hover:text-gray-200 ml-6"
              to="/wishlist"
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
