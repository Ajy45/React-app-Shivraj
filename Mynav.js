import React from 'react'
import { Link } from 'react-router-dom'

export default function Mynav() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="services">Serviesscc</Link></li>
        </ul>
    </div>
  )
}