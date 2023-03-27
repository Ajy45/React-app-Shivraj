import React, { Component } from 'react'
export default class MyState extends Component {
     constructor(props){
        super(props)
        this.state={
            id:this.props.id,
            name:"cnc"
        }
    }
  //   state={
  //     id:this.props.id,
  //     name:"cnc"
  // }
    handelclick=(n)=>{
      this.setState({
        id:this.state.id+=1,
        
        name:n,
        
      })
    }
  
     updt=()=>{
      this.handelclick("welcome")
    }

      updateName=(nn)=>{
      this.setState({
        name:nn
      })
    }
 render() {
    return (
      <div>
        <h1>name is {this.state.name}</h1>
        <h1>props id {this.props.id}</h1>
        <h1>state0 id {this.state.id}</h1>
        <input type="button" onClick={this.updt} />
        <input type="button" onClick={()=>{this.updateName("welcome")}} value="welcome"/>
        <input type="button" onClick={()=>{this.updateName("cnc")}} value="cnc"/>
        <input type="button" onClick={()=>{this.updateName("nerul")}} value="nerul"/>
      </div>
    )
  }
}
