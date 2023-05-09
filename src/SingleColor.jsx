import React from 'react'; 
import { toast } from "react-toastify";

export default function SingleColor({ item, index }) {

    const copyToClipboard = async (text) => {
        try{
            await navigator.clipboard.writeText(`#${text}`);
            toast.success("YEAH! Copied to clipboard.",{
                autoClose: 1500, 
                pauseOnHover: true,
                icon: "🍍"
            })
     
        } catch (error) {
            console.error("Failed to copy text: ", error)
        }
    }
    
  return (
            <div className={ index > 10? "colors light" : "colors"} //using the index to change font color of the darker shades
                style={{backgroundColor: `#${item.hex}`, width: "120px", height: "120px"}}
                onClick={()=>copyToClipboard(item.hex)}>
                <p className='weight'>{item.weight} %</p>
                <p className='hexcode'>#{item.hex}</p>
                <br />
            </div>  
  )
}

