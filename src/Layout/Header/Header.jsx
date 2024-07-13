import { FaMicrophoneAlt, } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoArrowBackSharp } from "react-icons/io5";
import { RiVideoUploadFill } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import PropTypes from 'prop-types';
import { useState } from "react";


const Header = ({ toggleSidebar }) => {
  const [fullWidthSearch, setFullWidthSearch] = useState(false);


  return (
    <>

      <div className={`${fullWidthSearch ? "justify-center" : "justify-between"} container flex items-center gap-10 md:gap-20 bg-transparent py-1 px-3 text-white sticky top-0 z-10 max-w-full`}>

        <div className={`${fullWidthSearch ? "hidden" : "flex"} ml-2 flex items-center gap-4`}>
          <toggle onClick={toggleSidebar}>
            <IoIosMenu className="h-8 w-8" />
          </toggle>
          <img className="h-6 w-auto" src="/src/assets/logo2.png" alt="App Logo" />
        </div>

        <form className={`${fullWidthSearch ? "flex" : "hidden md:flex"} gap-4 relative w-full max-w-2xl items-center justify-center`}>
          {fullWidthSearch && (
            <button className="btn-primary" onClick={() => setFullWidthSearch(false)}>
              <IoArrowBackSharp className="w-5 h-5" />
            </button>
          )}

          <div className="flex w-full">
            <input type="text" placeholder="Search..." className="w-full rounded-l-full bg-transparent px-4 py-2 border border-gray-600 focus:border-blue-800 text-white outline-none" />
            <button className="rounded-r-full bg-gray-600 px-4 py-2 text-white ">
              <CiSearch className="w-5 h-5" />
            </button>
          </div>
          <button className="btn-primary">
            <FaMicrophoneAlt className="h-5 w-5" />
          </button>
        </form>


        <div className={`${fullWidthSearch ? "hidden" : "flex"} mr-4 flex items-center gap-0`}>
          <button className="btn-secondary md:hidden" onClick={() => setFullWidthSearch(true)}>
            <CiSearch className="w-5 h-5" />
          </button>

          <button className="btn-secondary md:hidden">
            <FaMicrophoneAlt className="h-5 w-5" />
          </button>
          <button className="btn-secondary">
            <RiVideoUploadFill className="w-5 h-5" />
          </button>
          <button className="rounded-full p-2.5">
            <img className="h-8 w-8 rounded-full" src="/src/assets/profile.jpg" alt="user-profile" />
          </button>

        </div>

      </div >

    </>
  )
};

Header.propTypes = {
  toggleSidebar: PropTypes.bool.isRequired,
};

export default Header;
