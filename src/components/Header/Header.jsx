import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import PropTypes from 'prop-types';


const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-transparent p-4 text-white sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between gap-6">
        <div className="ml-2 flex items-center gap-4">
          <button onClick={toggleSidebar}>
            <IoIosMenu className="h-8 w-8" />
          </button>

          <img
            className="mr-2 h-8"
            src="/src/assets/logo2.png"
            alt="App Logo"
          />
        </div>

        <div className="flex flex-1 justify-center">
          <div className="relative flex w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-l-full bg-gray-700 px-4 py-2 text-white focus:bg-transparent focus:text-white focus:outline-1"
            />
            <button className="rounded-r-full bg-gray-800 px-4 py-2 text-white ">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="mr-6 flex items-center space-x-4">
          <button className="mx-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Upload
          </button>
          <img
            className="h-8 w-8 rounded-full"
            src="/path/to/user-account-logo.png"
            alt="User Account"
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.bool.isRequired,
};

export default Header;
