import { useState } from 'react';


export default function MyButton({count, setCount}) {
  return (
    <button onClick={()=>{setCount(count+1)}}>
      Clicked {count} times
    </button>
  );
}