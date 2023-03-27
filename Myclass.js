import React, { Component } from 'react'

export default class Myclass extends Component {
    
  render() {
    let msg="welcome"
    return (
      <div style={{background:"green",color:"aqua"}}>Myclass {msg} </div>
    )
  }
}
