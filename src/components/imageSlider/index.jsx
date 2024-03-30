import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 10, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loadingState, setLoadingState] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoadingState(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoadingState(false);
      }
    } catch (e) {
      setErrorMsg(e.errorMsg);
      setLoadingState(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);


  if (loadingState) {
    return <div>Loading...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occured! {errorMsg} </div>;
  }
function handlePrev(){
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1 )

}
function handleNext(){
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1 )

}

  return (
    <div className="relative flex items-center justify-center h-96 w-96 ">
      <BsArrowLeftCircleFill onClick={handlePrev()} className="absolute w-[2rem] h-[2rem] text-black filter drop-shadow-sm left-[1rem]" />
      {images && images.length
        ? images.map((imgItem, index) => (
            <div>
            <h1>{imgItem.author}</h1>
            
            <img 
            key={imgItem.id} 
            src={imgItem.download_url} 
            alt={imgItem.download_url}
            className="rounded-lg shadow-sm w-full h-full"
            />
            </div>
        ))
        : null}
      <BsArrowRightCircleFill onClick={handleNext()} className="absolute w-[2rem] h-[2rem] text-black filter drop-shadow-sm right-[1rem]" />
      <span className="flex absolute bottom-[1rem]">
        {
            images && images.length ? 
            images.map((_, index)=> 
            <button key={index}
                className={currentSlide === index ? "bg-black h-[15px] w-[15px] rounded-2xl border-none outline-none my-1" : "update"}
                onClick={()=>setCurrentSlide(index)}></button>


            )
            : null
        }
      </span>
    </div>
  );
};

export default ImageSlider;


// rounded-lg shadow-sm w-full h-full
// {currentSlide === index ? "rounded-lg shadow-sm w-full h-full" : ""}