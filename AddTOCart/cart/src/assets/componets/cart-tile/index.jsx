import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/slice/cart-slice'

const CartTile = ({cartItem}) => {
    const dispatch = useDispatch()
    function handleRemoveFormCart(){
dispatch(removeFromCart(cartItem.id))
    }
  return (
    <div className='flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl'>
        <div className='flex'>
            <img src={cartItem?.image} className='h-28 rounded-lg' alt="" />
            <div>
                <h1>{cartItem?.title}</h1>
                <h1>{cartItem?.price}</h1>
            </div>
        </div>
<button onClick={handleRemoveFormCart} className='bg-red-950 text-white'>
    Remove Fro Cart
</button>
    </div>
  )
}

export default CartTile