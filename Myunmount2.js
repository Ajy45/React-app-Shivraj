import React, { Component } from 'react'

export default class Myunmount2 extends Component {
  render() {
    return (
      <div>Myunmount2</div>
    )
  }
  componentWillUnmount(){
    console.log("component unmounted...")
  }

}
