import React, {useState} from 'react'

export default function Form({ addColor }) {

    const [color, setColor] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        addColor(color)
    }

  return (
    <div>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>

            <input 
            type="color" 
            value={color}
            onChange={(e)=>setColor(e.target.value)}
             />


            <input 
            type="text"
            value={color} 
            onChange={(e)=>setColor(e.target.value)}
            placeholder='#f15025'
             />

            <button 
            type='submit'
            style={{background: color}} //sets the btn to the chosen color too
            >Submit</button>
        </form>
    </div>
  )
}
