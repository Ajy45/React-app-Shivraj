import React, { useEffect, useState } from 'react'

export default function MyHooks() {

    let arr=useState("cnc")
    let getdata=arr[0]
    let setdata=arr[1]

    let [getAge,setAge]=useState(1)
    let [a,b]=useState("p")

    let UpdateData=()=>{
        setdata("welcome")
        setAge(getAge+1)
        b("k")
    }
    useEffect(()=>console.log("useeffect is call"))

  return (
    <div>MyHooks

        <h1>name : {getdata}</h1>
        <h1>age is {getAge}</h1>
        <h1>{a}</h1>
        <input type="button" onClick={UpdateData} />
    </div>
  )
}
