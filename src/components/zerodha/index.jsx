import React from "react";
import links from "./data";
import img from "../../assets/course.jpg"
import { Link } from "react-router-dom";
const Zerodha = () => {
  console.log(links);
  return (
    <>
      <div className="bg-black">
        <ul className="  text-white font-bold py-4 flex justify-between  mx-1 md:mx-20  ">
          <div>HI</div>
          <div className="flex justify-evenly gap-1 md:gap-8">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link> </li>
            <li><Link to="/service">service</Link></li>
          </div>
        </ul>
      </div>
      <div className=" mt-10 flex justify-center">
        <div>
          <h1 className="text-centre flex justify-center text-xl md:text-5xl font-medium">
            Invest in everything
          </h1>
          <p className="text-sm md:text-lg mt-7 flex justify-center">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <p className="flex justify-center">
            <button className="text-xl md:text-2xl px-4 py-2 bg-blue-400 mt-5 rounded-lg">
              Sign up now
            </button>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 h-72 m-10 mx-20">
        <div className=""><img className="h-full" src={img} alt="" /></div>
        <div className="">
          <h1 className="text-5xl my-3">Largest stock broker in India</h1>
          <p>
            1.3+ Crore Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <ul className="grid grid-cols-2  mt-6 gap-3 ">
            <li>&#x2022;Futures and Options</li>
            <li>&#x2022;Stocks & IPOs</li>
            <li>&#x2022;Commodity derivatives</li>
            <li>&#x2022;Direct mutual funds</li>
            <li>&#x2022;Currency derivatives</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Zerodha;
