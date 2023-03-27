import React from 'react'

export default function Myguest(props) {
  return (
    <div>Myguest

    <button onClick={()=>props.setlogin(true)}> Login btn</button>

    </div>
  )
}
