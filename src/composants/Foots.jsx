import React from "react"
import { useRef,useState } from "react"

function Foots({todos,id}){
return(
<li>
  <label htmlFor={id}>
    <input type="checkbox" id={id} />
    {todos.name}
  </label>
  <button className="edit">modifier</button>
</li>

)
}
export default Foots