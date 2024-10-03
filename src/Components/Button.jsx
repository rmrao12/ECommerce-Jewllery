import React from 'react'

export const Button = () => {
  return (
    <div><button>Click Me</button></div>
  )
}

export default Button;



const input = "Given String";
let output = "";
for (let i = input.length-1; i >= 0; i--)
{
    output +=input[i];
}