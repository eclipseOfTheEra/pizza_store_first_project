import React from 'react'
import classNames from 'classname'
// button.jsx(price | shopping cart) --> header.jsx




export const Button = ({onClick, className, outline, children}) => {
  return (
    <div>
        <button
        onClick = {onClick}
        className={classNames('button', className,{'button--otline' : outline})}
        
        >{children}</button>
    </div>
  )
}

export default Button;