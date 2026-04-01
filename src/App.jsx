import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import React from 'react'

function App() {

  const createZip = async (e)=>{
    // const zip = new JSZip
    // zip.file("demo.txt","hello")
    // zip.file("sample.json",JSON.stringify({name:"aman",address:"varanasi"},null,2))
    // const blob = await zip.generateAsync({type:"blob"})
    // saveAs(blob,"files.zip")

    try{
      const zip = new JSZip()
      const files = e.target.files
      Array.from(files).forEach((file)=>{
       zip.file(file.name, file)
      })
      const blob = await zip.generateAsync({type:"blob"})
      saveAs(blob,"new-compressed.zip")
    }
    catch(err){
    console.log("Error - ",err.message)
    }
  }

  return (
    <div className='bg-gray-200 h-screen flex items-center justify-center'>
      <div className='bg-white shadow-lg rounded-2xl p-8 w-lg'>
        <h1 className='text-4xl font-bold'>Create Zip</h1>
        <input
        type="file"
        multiple
        className="border border-gray-300 text-white font-medium bg-blue-500 rounded-lg p-3 mt-4 hover:bg-blue-600 active:scale-80 transform duration-300"
        onChange={createZip}
       />
      </div>
    </div>
  )
}

export default App
