import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'
import StarRating from './components/star-rating'
import ImageSlider from './components/imageSlider'
import LoadMoreData from './components/loadMore'
import QRCode from './components/qr_genrater'
import ThemeChanger from './components/themeChanger'
import ScrollIndicator from './components/scroll_Indicator'
import Tabs from './components/customTabs/tab-test'
import TabTest from './components/customTabs/tabs'
import ModelTest from './components/customModelPopUp/modalTest'
import GithubProfileFind from './components/githubProfileFinder'
function App() {

  return (
    <>
    <h1 className='flex justify-center h-[10vh] items-center text-2xl font-semibold'>LEARING REACT JS! </h1>
    {/* <Accordian/>   */}
    {/* <StarRating/> */}
    {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={10}/> */}
    {/* <LoadMoreData/> */}
    {/* <QRCode /> */}
    {/* <ThemeChanger/> */}
    {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
    {/* <TabTest /> */}
    {/* <ModelTest/> */}
    <GithubProfileFind/>
    </>



  )
}

export default App
