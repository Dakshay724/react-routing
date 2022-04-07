import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
         <div className='container bg-info'>
    <h1>Component Life Cycle</h1>
    
    <ul className="nav justify-content-center">
   <li className="nav-item">
     <a className="nav-link active" ><Link to="/Mounting"><h3>Mounting</h3></Link></a>
   </li>
   <li className="nav-item">
     <a className="nav-link" ><Link to="/Updating"><h3>Updating</h3></Link></a>
   </li>
   <li className="nav-item">
     <a className="nav-link"><Link to="/Unmounting"><h3>Unmounting</h3></Link></a>
   </li> 
    </ul>
    </div>
  )
}
