import React from 'react'
import PropTypes from 'prop-types'
export default function Card(props) {
  return (
    <> 
    
    <div className="st">
        {/* <img src="adv.jpg" alt="public folder" /> */}
        <img src={props.img} alt="src folder"/>   
        <h1>{props.title}</h1 >
        <p>{props.features}</p>
        <br></br><br></br><br></br>
        <button className='btn'>{props.price} /-</button>
    </div>
  
    </>
  )
}


Card.defaultProps={
  title:"title not found",
  price:0
}


Card.propTypes={
price:PropTypes.number.isRequired,
title:PropTypes.string
}
