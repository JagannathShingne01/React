import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch()
  const {cart} = useSelector(state=> state)
 const noOfItem = cart.length
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold  text-xl cursor-pointer transition-all">
              React Redux Navbar
            </h1>
          </div>
        </Link>
        <ul className="flex items-center space-x-6 text-gray-800 font-semibold ">
            <Link to={"/"}>
                <li className="cursor-pointer list-none">Home</li>
            </Link>
            <Link to={"/cart"}>
                <li className="cursor-pointer">Cart <span>{noOfItem}</span></li>
            </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
