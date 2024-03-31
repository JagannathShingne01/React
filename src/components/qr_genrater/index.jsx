import React, { useState } from 'react'
import QRCode from "react-qr-code"
const QRCodeGenrate = () => {

    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

  function handleGenRate(){
    setQrCode(input)
  }

  return (
    <div className=''>
        <h1 className='text-2xl'>QR Code Generator</h1>
        <div>
          <input onChange={(e)=>setInput(e.target.value)} type="text" name='qr-code' placeholder='Enter Your Value Here' className='p-1 border m-2 mt-10 rounded-md'/>
          <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenRate} className='bg-black p-1 px-3 text-sm m-2 text-white rounded-md'>Generate</button>
        </div>
        <div className='flex justify-center mt-10'>
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor='white'/>
        </div>
    </div> 
  )
}

export default QRCodeGenrate;