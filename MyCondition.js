import React, { useEffect, useState } from 'react'
import Myguest from './Myguest'
import MyPrime from './MyPrime'

export default function MyCondition(props) {
const [login,setlogin]=useState(props.login)
useEffect(()=>{
        console.log('use effect is call')
})

let logout=()=>{
    setlogin(false)
}
//let component=""
    return(
    <div>
        {
           // (login)?<MyPrime logout={logout} />:<Myguest setlogin={setlogin} />
            //   login && <MyPrime logout={logout} />
           ( ()=>{
        if(login){
            return <MyPrime logout={logout} />
        }
        else{
        return <Myguest setlogin={setlogin} />
        }})()

        }
    </div>
  )
}
