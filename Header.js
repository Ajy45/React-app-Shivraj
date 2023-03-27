import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AppleIcon from '@mui/icons-material/Apple';
export default function Header(props) {
  return (
    <div>
        <h1 className='bg-warning display-1' >this is main <AccessTimeIcon className='icon'/> <AppleIcon/> heading.  .{props.title}</h1>
    </div>
  )
} 
