import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'
import StarRating from './components/star-rating'
import ImageSlider from './components/imageSlider'
import LoadMoreData from './components/loadMore'
import QRCode from './components/qr_genrater'
function App() {

  return (
    <>
    {/* <Accordian/>   */}
    {/* <StarRating/> */}
    {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={10}/> */}
    {/* <LoadMoreData/> */}
    <QRCode />
    </>

  )
}

export default App
