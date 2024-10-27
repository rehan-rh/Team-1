import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import emblem from "../Assets/images/emblem.svg";

const Header = () => {
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isProfilesDropdownOpen, setIsProfilesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between bg-gray-300 shadow-md p-3 ">
        <div className="flex">
          <div>
            <img src={emblem} alt="Emblem" className="h-16 m-4" />
          </div>
          <div className="m-5">
            <h2 className="text-xl font-bold">न्याय विभाग</h2>
            <h1 className="text-xl font-bold">DEPARTMENT OF JUSTICE</h1>
          </div>
        </div>

        <div className="flex items-center">
          <ul className="flex gap-4 p-2 m-2">
            <li className="p-2 text-xl font-semibold hover:text-gray-700 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2 text-xl font-semibold hover:text-gray-700 cursor-pointer">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="p-2 text-xl font-semibold hover:text-gray-700 cursor-pointer">
              <Link to="/judiciaryinfo"> Judicial Information </Link>
            </li>

            {/* Dropdown for "Profiles" */}
            <li
              className="relative p-2 text-xl font-semibold hover:text-gray-700 cursor-pointer"
              onMouseEnter={() => setIsProfilesDropdownOpen(true)}
              onMouseLeave={() => setIsProfilesDropdownOpen(false)}
            >
              Profiles
              {isProfilesDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-10">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/chiefjustice">
                      Chief Justice and Sitting Judges
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/formerjudges">Former Judges</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/registry">Registry</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Dropdown for "More" */}
            <li
              className="relative p-2 text-xl font-semibold hover:text-gray-700 cursor-pointer"
              onMouseEnter={() => setIsMoreDropdownOpen(true)}
              onMouseLeave={() => setIsMoreDropdownOpen(false)}
            >
              More
              {isMoreDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    Option 1
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    Option 2
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    Option 3
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <button
          className="m-4 p-4 text-xl font-semibold bg-green-400 hover:bg-green-500 text-white rounded-lg shadow-md"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
