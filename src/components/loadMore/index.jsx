import React, { useEffect, useState } from 'react'

const LoadMoreData = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    async function fetchProduct(){
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const result = await response.json()
            console.log(result,"result")

            if (result || result.products && result.products.length) {
                setProducts((prevData)=> [...prevData, ...result.products]);
                setLoading(false)

            }

        } catch (e) {
            console.log(e);
            setLoading(false)
        }

        if(loading){
            return <div>Loading....</div>
        }
    }

    useEffect(() => {
      fetchProduct()
    }, [count])
    
    useEffect(() => {
        if (products && products.length === 100 ) {
            setDisableButton(true)
        }
      }, [count])
      
    
  return (
    <div className='flex flex-col gap-5'>
       <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
        {
            products && products.length ? 
            products.map((item)=>(
                <div className='border-2 gap-3' key={item.id}>
                    <img className='h-52 w-full' src={item.thumbnail} alt={item.title} />
                    <p className='mt-5 border-t-2'>{item.title}</p>
                </div>
            ))
            : null
        }
       </div>
       <div className=''>
        <button disabled={disableButton} className='' onClick={()=> setCount(count + 1)}>Load More Products</button>
       </div>
       {
        disableButton ? "You Have Reached to Limit 100 product" : null
       }

    </div>
  )
}

export default LoadMoreData