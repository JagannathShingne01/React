import React, { useState } from "react";

const Tabs = ({ tabsContent, onChange }) => {
  const [CurrentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="flex flex-col justify-center items-center m-10 gap-10">
      <div className="">
        {tabsContent.map((tabItem, index) => (
          <div
            className="m-5 p-2 bg-yellow-300 rounded-lg w-32 text-center cursor-pointer"
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>

      <div className="bg-black text-white p-5 rounded-lg text-xl">
        {tabsContent[CurrentTabIndex] && tabsContent[CurrentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
