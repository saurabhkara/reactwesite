import React,{useState} from 'react';
import './Navbar.css';

import { HiMenu } from 'react-icons/hi';
import {FaRegTimesCircle } from 'react-icons/fa';
import {BsFillHouseFill } from 'react-icons/bs';


export default function Navbar() {
    const[active, setActive] = useState(false);
    const onClick = () => setActive(!active);

  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span><BsFillHouseFill />Real</span>Estate</h1>
            <button className='btn'>Signin</button>
            <ul className={active ? 'nav-menu active': 'nav-menu'}>
                <li > <a href='#'>Home</a></li>
                <li > <a href='#'>Search</a></li>
                <li > <a href='#'>About</a></li>
                <li > <a href='#'>Contact</a></li>
               
            </ul>
            <div className='hamburger'>
                {
                    active ?
                    
                
                    (<FaRegTimesCircle className='icon' onClick={onClick}/>)
                    :
                    (<HiMenu className='icon' onClick={onClick}/>)
                    
                }
            </div>
        </div>
    </div>
  )
}
