import React, { useState } from "react";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";


const App = () => {

  const [colors, setColors] = useState(new Values("#f15025").all(10))

  //fct passed to form - on submit = add color of the color submitted
  const addColor = (color) => {
    //setup in try/catch in case user doesnt provide correct values
    try{
      const newColors = new Values(color).all(10) //10 = value of increment
      setColors(newColors)
    } catch(error) {
      console.log(error)
      //toast.error('That didnt work')
      toast.error(error.message)
    }

  }
  
  // toast.success('Halleluja! Well done.')

  return (
    <div>

    <ToastContainer position="top-center" />

    <Form addColor={addColor} />

    <ColorList colors={colors}/>


    </div>
  )
};
export default App;
