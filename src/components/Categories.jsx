import React, { useState } from 'react'

const Categories = ({items, onClick}) => {
    // usestate for button selection
   const  [activeItem, setActiveItem] = useState(0)
    //    
    return (
    <div className="categories">
    <ul>
        {  //checking for undefind - "items &&"           //button coloring function
           items && items.map((name, index) => <li         className = {activeItem === index ? 'active' : ''}
           //set an index for useState             //key for map [name , index]
            onClick={() => {setActiveItem(index)}} key={`${name}_${index}`}>{name}</li>)
        }      
    </ul>
  </div>
  )
}

export default Categories