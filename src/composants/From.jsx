import React from "react"
import { useRef,useState,useContext } from "react"
import { Datacontext } from "./Database"


function From(){
    const [todo,settodo]=useContext(Datacontext);
    const [todoname,settodoname]=useState("");
    const addtodo= e =>{e.preventDefault()
            settodo([...todo,{name:todoname,complete:false}])
    } 
return(
    <>
      <form autoComplete='off' onSubmit={addtodo}>
        <input type="text" required 
        placeholder='entrez un numero'name="todo" id="todo" value={todoname}
        onChange={e=>settodoname(e.target.value)} />
        <button type='submit' className='rec'>enregistrer</button>
      </form>
    </>
)
}
export default From