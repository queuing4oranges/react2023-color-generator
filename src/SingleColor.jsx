import React from 'react'

export default function SingleColor({ item, index }) {
    
  return (
            <div className={ index > 10? "light" : ""} //using the index to change text color of the darker shades
                style={{backgroundColor: `#${item.hex}`, width: "300px"}}>
                <p>#{item.hex}</p><p>{item.weight} %</p>
                <br />
            </div>  
  )
}
