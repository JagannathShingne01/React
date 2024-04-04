import React, { useEffect, useState } from 'react'
import Modal from './modal'

const ModelTest = () => {
    const [showModal, setShowModel] = useState(false)

    function handleTogglePopUp(){
        setShowModel(!showModal)
    }
    function onClose (){
        setShowModel(false)
    }
  return (
    <div className='flex justify-center items-center mt-10 '>
        <button className='px-6 py-2 bg-yellow-200 rounded-sm font-semibold active:bg-yellow-500' onClick={handleTogglePopUp}>Open Modal</button>
        {
            showModal && <Modal onClose={onClose} body={<div>Customized body </div>}/>
        }
    </div>
  )
}

export default ModelTest