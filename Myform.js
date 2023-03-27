import React from 'react'
import { useState } from 'react'

export default function Myform() {
const [getName,setName]=useState("")
const [getPass,setPass]=useState("")
const [getFullName,setFullName]=useState("")

// let fun=(e)=>{
// setName(e.target.value)
// }

let handelClick=()=>{
setFullName(getName+getPass)
}

  return (
    <div>
        <form>
            <input type="text" name="name" value={getName} onChange={(e)=>setName(e.target.value)}  /> <br/>
            <input type="text" name="pass" value={getPass} onChange={(e)=>setPass(e.target.value)}  /> <br/>
            <input type="button" onClick={handelClick}  />
            <input type="text" value={getFullName}   />
        </form>
    </div>
  )
}
