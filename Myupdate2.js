import React, { Component } from 'react'

export default class Myupdate2 extends Component {
    constructor(props){
        super(props)
        this.state={
            id2:this.props.id2
        }
        console.log("constructor in update 2 is call")

    }
    static getDerivedStateFromProps(props, state) {
        console.log("getderived in update 2 is call")

        console.log(props,state)
        return ({id2:props.id2}) //updated object
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("should component in update 2 is call")
  
        console.log(nextProps,nextState)
        return true
        /*if(nextProps.id2<105){
            return true
        }
        else{
        return false
        }*/
    }
     render() {
    console.log("render in update 2 is call")
    return (
      <div>Myupdate2 
            <h1> id2 = {this.state.id2}</h1>
         </div>
    )
  }

  
  
  
  
  getSnapshotBeforeUpdate(prevProps, prevState){
console.log("get snapshot is calll")
console.log(prevProps,prevState)
return 100
}
componentDidUpdate(prevProps, prevState, snapshot) {
console.log("updated....")
console.log(prevProps,prevState,snapshot)
}

  
}
