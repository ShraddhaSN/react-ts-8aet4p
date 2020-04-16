import React from 'react';

const hello = (props) =>
{
  console.log("child rendering method")
  return <p onClick= {props.click} onChange={props.change}> HELLO {props.name}, from {props.company} to our React app,{props.children}</p>
}

export default hello; 