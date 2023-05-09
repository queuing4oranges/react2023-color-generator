import React from 'react'; 
import { toast } from "react-toastify";

export default function SingleColor({ item, index }) {

    const copyToClipboard = async (text) => {
        try{
            await navigator.clipboard.writeText(`#${text}`);
            console.log("Text was copied to clipboard")
            toast.success("YEAH! You copied that to clipboard.",{
                autoClose: 1500, 
                pauseOnHover: true,
                icon: "🍍"
            })
     
        } catch (error) {
            console.error("Failed to copy text: ", error)
        }
    }
    
  return (
            <div className={ index > 10? "light" : ""} //using the index to change text color of the darker shades
                style={{backgroundColor: `#${item.hex}`, width: "300px"}}
                onClick={()=>copyToClipboard(item.hex)}>
                <p>#{item.hex}</p><p>{item.weight} %</p>
                <br />
            </div>  
  )
}

