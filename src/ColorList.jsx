import React from 'react'; 
import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';



export default function ColorList({colors}) {

  

  return (
    <div className='colors-container'>    
        {colors.map((item, index) => {
          const id = nanoid();
        
          return(
            <div className='color' key={id}>
                <SingleColor item={item} index={index}/>
            </div>
            )
        })}
    </div>
  )
}
