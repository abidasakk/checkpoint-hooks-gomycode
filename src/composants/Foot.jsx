import React from "react"
import { useRef,useState } from "react"

function Foot(){
return(
    <>

<div>
  <label htmlFor="all"><input type="checkbox" id='all' name='all'/>
  all 
  </label>
<button className='delet'>supprimer</button>
</div>

    </>
)
}
export default Foot