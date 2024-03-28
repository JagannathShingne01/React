import data from "./data";
import React, { useState } from "react";

const Accordian = () => {
  const [select, setSelect] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelect(getCurrentId === select ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId == -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
    console.log(findIndexOfCurrentId, "ajh");
  }
  console.log(select, multiple);

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="p-3 bg-black text-white rounded-lg"
      >
        MultiSelection
      </button>
      <div className="w-[500px]">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="bg-gray-500 m-10 p-6 ">
              <div
                className="text-black gap-6 flex cursor-pointer"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3 className=" ">{dataItem.question}</h3>
                <span className="">+</span>
              </div>

              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="mt-8">{dataItem.answer}</div>
                  )
                : select === dataItem.id && (
                    <div className="mt-8">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Found </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
