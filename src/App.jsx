import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import React from 'react'

function App() {

  const createZip = async ()=>{
    const zip = new JSZip
    zip.file("demo.txt","hello")
    zip.file("sample.json",JSON.stringify({name:"aman",address:"varanasi"},null,2))
    const blob = await zip.generateAsync({type:"blob"})
    saveAs(blob,"files.zip")
  }

  return (
    <div>
      <button onClick={createZip}>Create Zip</button>
    </div>
  )
}

export default App
