import React from "react"
import { useRef,useState,useContext } from "react"
import Foots from "./Foots"
import { Datacontext } from "./Database"
function Listen(){

  const [todo,settodo]=useContext(Datacontext);
return(
    <ul>
      { todo.map((todos, index) =>(<Foots todos={todos} key={index} id={index} />))
}
    </ul>
)
}
export default Listen 