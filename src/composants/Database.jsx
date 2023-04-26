import React from "react";
import { useState,useEffect,createContext } from "react";

export const Datacontext = createContext();
const Database=(props) =>{
let [todo,settodo]=useState([])
return(
<>
<Datacontext.Provider value={[todo,settodo]} >
   {props.children}
</Datacontext.Provider>

</>
)
}
export default Database;