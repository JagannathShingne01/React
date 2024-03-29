import React, {  useState } from 'react'
import {FaAd, FaStar} from 'react-icons/fa'
import "./style.css"
const StarRating = ({numberOfStats = 5}) => {

    const[rating, setRating] = useState(0);
    const[hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex){
       setHover(getCurrentIndex)

    }

    function handleMouseLeave(){
        setHover(rating)

    }

  return (
    <>
    <div>StarRating</div>
    <div className='flex justify-center'>
        {
            [...Array(numberOfStats)].map((_, index)=>{
                index += 1
                return(
                <FaStar
                key={index}
                className={ index <= (hover || rating) ?'active' : 'inactive'}
                    
                    onClick={()=>handleClick(index)}
                    onMouseEnter={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave(index)}
                    size={40}
                />
             ) })
        }
    </div>
    </>
  )
}

export default StarRating
