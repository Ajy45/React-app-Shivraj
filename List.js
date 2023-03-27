import React, { Component } from 'react'

export default class List extends Component {
    state={
        data:[
            {imgsrc:"./adv.jpg",name:"cnc",age:23,designatio:"java"},
            {imgsrc:"./adv.jpg",name:"welcome",age:3,designatio:"phop"},
            {imgsrc:"./adv.jpg",name:"ok",age:77,designatio:"pythn"}
        ]
    }
  render() {
   // let arr=[1,2,3,34,4];
 

    return (
      <div>
        {
            this.state.data.map((a,index)=>{
                return(
                    <div key={index}>
                        <img  src={a.imgsrc}/>
                        <h2>{a.name}</h2>
                        <p>{a.age}</p>
                        <button>{a.designatio}</button>
                    </div>
                )
            })



            // arr.forEach((d)=>{
            //     return (
            //         <>
            //             <li>{d}</li>
            //         </>
            //     )
            // })
            // arr.map((data,e)=>{
            //     return (
            //         <>
            //         <div key={e}>
            //         <li>{data}</li>
            //         </div>
            //         </>
            //     )
            // })
        }
      </div>
    )
  }
}
