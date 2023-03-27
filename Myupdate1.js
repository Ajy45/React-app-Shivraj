import React, { Component } from 'react'
import Myupdate2 from './Myupdate2'

export default class Myupdate1 extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.id
        }
        console.log("constructor in update 1 is call")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getderived in update 1 is call")

        console.log(props,state)
        return null
    }
    handelClick=()=>{
        this.setState({
            id:this.state.id+1
        })
    }
  render() {
    console.log("render in update 1 is call")
    return (
      <div>
        Myupdate1
        <h1> id1 = {this.state.id}</h1>
        <Myupdate2 id2={this.state.id} />
        <input type="button" onClick={this.handelClick} />
    </div>
    )
  }
}
