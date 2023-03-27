import React, { Component } from 'react'

export default class Mymount2 extends Component {
    constructor(props){
        super(props)
        this.state={
            id2:this.props.id2
        }
        console.log("con in mount 2 is calll...")
    }

    static getDerivedStateFromProps(props,state){
        console.log("getderived in mount 2 is calll...")
        console.log(props,state)
        return null
    }

  render() {
    console.log("render in mount 2 is calll...")
    return (
      <div>
        Mymount2 {this.state.id2}
        </div>
    )
  }
  componentDidMount(){
    console.log("component 2 mount");
  }
}
