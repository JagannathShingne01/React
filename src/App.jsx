import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'
import StarRating from './components/star-rating'
import ImageSlider from './components/imageSlider'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Accordian/>   */}
    {/* <StarRating/> */}
    <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={10}/>
    </>

  )
}

export default App
