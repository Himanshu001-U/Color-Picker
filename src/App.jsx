import { useState } from 'react'
import "./index.css";

function App() {

  const [color, setColor] = useState('#000000'); // Default color

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
        <h1 className='text-pink-700 text-8xl font-bold text-center'>Color Picker</h1>
        <div className='flex justify-center items-center mt-40 flex-col gap-10'>
          <h1>Choose a color</h1>
          <input type="color" value={color} onChange={handleChange} className='w-100 h-100 border-0 cursor-pointer' />
          <h1>Color is : {color}</h1>
        </div>

    </>
  )
}

export default App
