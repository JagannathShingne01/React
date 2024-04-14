import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../componets/cart-tile/index";
const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  console.log(cart, "sh");

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(cart, totalCart);
  return (
    <div>
      {cart && cart.length ? (
        <div className="min-h-[80vh] grid max-w-6xl mx-auto">
          <>
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
            <div>
              <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                <h1 className="font-bold text-lg ">Your Cart Summay</h1>
                <p>
                  <span className="text-gray-800">total Item</span>
                  <span className="text-gray-800">{cart.length}</span>
                  <span className="text-gray-800">
                    Total Amount <span>{totalCart}</span>
                  </span>
                </p>
              </div>
            </div>
          </>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center ">
          <h1 className="text-gray-800 font-bold texxt-xl mb-2">
            Your cart is empty
          </h1>
          <Link to={"/"}>
            {" "}
            <button className="bg-red-950 p-4 text-whit"> Shop Now</button>{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
