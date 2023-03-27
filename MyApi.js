import React, { useEffect, useState } from 'react'

export default function MyApi() {
    const [getApiData,setApiData]=useState([])
//const[getfilter,setfilter]=useState(1)

    const ApiData=async()=>{
        let data=await fetch(`https://dummyjson.com/products/`)

        data=await data.json()
        setApiData(data.products)
        console.log(data.products)

    }
    useEffect(()=>{ 
        ApiData()
    })
   // let changeData=()=>{
       // setfilter(getfilter+1)
   // }


  return (
    <div>{
        getApiData.map((data,index)=>{
            return(
                <div key={index}>
                    <h1>{data.title}</h1>
                    <img src={data.thumbnail}/>
                    <img src={data.images[1]}/>
                    <p>{data.description}</p>
                    <button>{data.price}</button>
                    <h2>{data.rating}</h2>
                    <h6>{data.discountPercentage}</h6>
                </div>
            )
        })
        //single data fetch
        // <>
        // <li>{getApiData.title}</li>
        // <img src={getApiData.thumbnail} />
        // </>
     }

     {/* <input type="button" onClick={changeData} value="btn" /> */}
    </div>
  )
}
