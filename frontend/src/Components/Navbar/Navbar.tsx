import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./Navbar.css";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="relative w-full mx-auto p-6 bg-LightBlue">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
          <img src={logo} alt="" className="w-12 h-12"/>
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="px-8 py-3 font-bold rounded text-white bg-DarkBlue hover:text-white hover:bg-gray-800 hover:cursor-pointer">
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
            <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded text-white bg-DarkBlue hover:text-white hover:bg-gray-800 hover:cursor-pointer"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="px-8 py-3 font-bold rounded text-white bg-gray-800 hover:opacity-70">
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded text-white bg-gray-800 hover:opacity-70"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;