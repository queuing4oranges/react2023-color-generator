import React from 'react'; 
import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';



export default function ColorList({colors}) {

  

  return (
    <div>    
        {colors.map((item, index) => {
          const id = nanoid();
        
          return(
            <div key={id}>
                <SingleColor item={item} index={index}/>
            </div>
  
            )
        })}
    </div>
  )
}
