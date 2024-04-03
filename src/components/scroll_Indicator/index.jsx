import React, { useEffect } from "react";
import { useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScroll / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  // console.log(scrollPercentage, data)
  if (loading) {
    return <div>Loading...</div>;
  }
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  return (
    <div>
      <div className="fixed top-0 z-1 w-[100%] h-14 text-center bg-black text-white text-2xl">
        <h1>Custom scroll indicator</h1>
        <div className="w-[100%]  absolute top-14 ">
          <div
            className="h-6  bg-gray-400 w-[0%]"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        {data && data.length > 0
          ? data.map((dataItem, idx) => <p className="p-2" key={idx}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
