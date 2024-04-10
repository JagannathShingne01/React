import React from 'react'

const Modal = ({id, header, body, footer, onClose}) => {
  return (
    <div className='text-black text-2xl fixed z-1 pt-6 left-0 top-0 w-full h-full overflow-auto  flex justify-center items-center bg-yellow-300' id={id || "Modal"}>
        <div className='relative bg-stone-300 m-auto p-10 border flex flex-col justify-center items-center border-red-800 rounded-md w-[80%] duration-100 transition-all delay-100'>
            <div className='header'>
                <span onClick={onClose} className='cursor-pointer text-center rounded px-3 absolute right-0 top-0 bg-yellow-100 hover:bg-yellow-300 p-1'>&times; </span>
                <h2 className='m-3'>{header ? header : 'Header'}</h2>
            </div>
            <div className='body'>
                {
                    body ? body : <div><p className='m-3'>This is our Modal</p></div>
                }
            </div>
            <div className='footer'>
                {
                    footer ? footer : <h2 className='m-3'>This is our footer</h2>
                }
            </div>
        </div>
    </div>
  )
}

export default Modal