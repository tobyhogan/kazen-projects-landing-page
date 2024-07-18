import React from "react";

import '../styles/global.css'
import '../styles/index.css'


export const NavBar = ({}) =>
    <nav className="NavBar flex justify-between fixed w-full bg-slate-100 text-slate-600">

        <a href='/' className='text-[35px] ml-14 py-1.5'>Kazen Projects</a>

        <ul className="flex my-auto mr-8">
          <li><a href="#contact">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>