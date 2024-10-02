import { useState ,useEffect } from 'react'
import React from 'react'
import Values from 'values.js'
const App = () => {
const [valueOf, setvalueOf] = useState('')
const [color, setcolor] = useState( new Values('#e60944').all(10))
const [alert, setalert] = useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    try {
      const coloravalue = new Values(valueOf).all(10)
      setcolor(coloravalue)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setalert(false)
    }, 500)
    return () => clearTimeout(timeout)
  }, [alert])
  

  return (
    <>
     <div className='flex justify-center items-center mt-3'>
     {alert && <div className='  ml-1/2 p-4 bg-white text-black w-1/5 mt-5 fixed text-center font-bold text-2xl'>Copyed Color Code</div> }</div>
    <main className=' flex gap-5 text-center mt-10 ml-10 bg-red-300  items-center w-1/3 p-2'>
     <h1 className=' text-4xl font-bold'>Color Generator </h1>
    
     <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='#FF0000' value={valueOf} onChange={(e)=>setvalueOf(e.target.value)}  />
        <button type="submit" className='bg-black text-white p-1'>Submit</button>
      </form>
      </div>
      </main>
     
      <div className='flex ml-12 mt-8 flex-wrap'>
        {color.map((e,value)=>{
          const {hex} = e;
          const hexvalue = `#${hex}`
          return <div key={value} style={{backgroundColor:`#${hex}`}} className=' h-60 w-60 cursor-pointer flex justify-center items-center' onClick={()=>{
           const a= navigator.clipboard.writeText(hexvalue);
           console.log(a);
            setalert(true)
          }}> {hexvalue}
           
          </div>
          
        })
      
        }
        
      </div>
      </>
 
  )
}

export default App