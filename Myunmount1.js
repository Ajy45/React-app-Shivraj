import React, { Component } from 'react'
import Myunmount2 from './Myunmount2'

export default class Myunmount1 extends Component {
    state={
        show:true
    }

    
  render() {
    if(this.state.show){
        var msg=<Myunmount2/>
        }
    return (
      <div>Myunmount1

        {msg}
        <input type="button" onClick={()=>{this.setState({show:false})}} />
      </div>
    )
  }
}
