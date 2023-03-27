import React from 'react'
import Card from './Card';
import Categoryheading from './Categoryheading';
import Header from './Header';
import beach from './beach.jpg'
import adm from './images/adaman.jpg'
export default function Mycontainer(props) {
let newimg="https://picsum.photos/seed/picsum/200/300";
let i1="https://picsum.photos/id/237/200/300"


  return (
    <>
    
    <Categoryheading heading={props.title}/>
    <div className='flex'>
<Card img={beach} features="Android v10.06.67 inch, IPS LCD Screen Large" />
<Card img={beach} title="Samsung f3" features="Android v10.06.67 inch, IPS LCD Screen Large " price={29000}/>
<Card img={adm} title="realme 7 pro" features="Android v10.06.67 inch, IPS LCD Screen Large" price={19000}/>
<Card img={i1} title="vivo y93" features="Android v10.06.67 inch, IPS LCD Screen Large" price={15000}/>

</div>
</>
  )
}
