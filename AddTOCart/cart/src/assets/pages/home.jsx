import React, { useEffect, useState } from 'react'
import ProductTile from '../componets/product-tile';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  async function fetchListProducts(){
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json()
    console.log(data)
    if(data){
      setLoading(false);
      setProducts(data)
    }
  }
  useEffect(()=>{
    setLoading(true)
    fetchListProducts()
  },[])

  return (
    <div>
      
      {
        loading ? <div className='min-h-screen w-full flex justify-center items-center'>
          <div className='h-52 w-52 bg-red-950 rounded-[50%]'>
                        fsss
          </div>
        </div> : 
        <div className='min-h-[80vh] grid grid-cols-2 md:grid-cols-3  max-w-6xl mx-auto p-3'>
          {
            products && products.length ? 
            products.map((productItem)=><ProductTile key={productItem.id} product={productItem}/>)
            : null
          }
        </div>
      }
    </div>
  )
}

export default Home