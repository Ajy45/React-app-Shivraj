import React, { Component } from 'react'
import Mymount2 from './Mymount2'

export default class Mymount extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.id
        }
        console.log("con in mount 1 is calll...")
    }
    static getDerivedStateFromProps(props,state){
        console.log("getderived in mount 1 is calll...")
        console.log(props,state)
        return null
    }
  render() {
    console.log("render in mount 1 is calll...")
    return (
      <div> Mymount  1 {this.state.id}
        <Mymount2 id2={this.state.id}/>
      </div>
    )
  }


  conmponentDidMount(){
    console.log("component 1 mount");
  }
}
