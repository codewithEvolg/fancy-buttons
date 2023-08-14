import { useReducer, useState } from "react";

function AngryButton(){
  
  const [anger, dispatch] = useReducer((anger, action) => {
    return anger > 1 ? 0 : anger + action;
}, 0)

  return (
    <button style={{ backgroundColor: `rgba(255,0,0,${anger})` }} onClick={() => dispatch(0.1)} className="AngryButton">
      {anger < 1 && <span>Don't click me too much!</span>}
      {anger > 1 && <span>Rawr!</span>}{ console.log(anger)}
    </button>
  );
}

export default AngryButton