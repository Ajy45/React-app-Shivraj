import React, { Component } from 'react'

export default class key extends Component {
state={
    a:[
      {  name:"ajay" ,para:"A paragraph is a series of sentences that are organized and coherent, and are all related to a single ",confirm:"submit"},
      {  name:"kaivlya" ,para:"A paragraph is a series of sentences that are organized and coherent, and are all related to a single",confirm:"submit"},
      {  name:"omkar" ,para:"A paragraph is a series of sentences that are organized and coherent, and are all related to a single ",confirm:"submit"}
    ]


}

  render() {



    return (
      <div className='main'>
      <div className='container'>
        {
            this.state.a.map((b,c)=>{
                return(
                    <div className='ajay' key={c}>
                      <br></br>
                    <h1 className='head'>{b.name}</h1>
                    <br></br>
                    <p className='para'>{b.para}</p>
                    
                    <button className='but'>{b.confirm}</button>
                    
                    
                     </div>

                )


            }
            )



        }
      </div>
      </div>
    )
  }
}
