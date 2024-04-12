import React from "react";
import links from "./data";
const Zerodha = () => {
  console.log(links);
  return (
    <>
      <div className="bg-black">
        <ul className="  text-white font-bold py-4 flex justify-between  mx-1 md:mx-20  ">
          <div>HI</div>
          <div className="flex justify-evenly gap-1 md:gap-8">
            {links.map((link) => (
              <>
                <a href="https://zerodha.com/" className="text-lg" key={link}>
                  {link.name}
                </a>
                {/* <div>Hi</div> */}
              </>
            ))}
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
        <div className="bg-red-300">d</div>
        <div className="bg-yellow-600">
          <h1 className="text-5xl my-3">Largest stock broker in India</h1>
          <p>
            1.3+ Crore Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="grid grid-cols-2 bg-yellow-300 ">
            <h1>Futures and Options</h1>
            <h1>Stocks & IPOs</h1>
            <h1>Commodity derivatives</h1>
            <h1>Direct mutual funds</h1>
            <h1>Currency derivatives</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zerodha;
