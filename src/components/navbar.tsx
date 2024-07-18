import React from "react";

import '../styles/global.css'
import '../styles/index.css'


export const NavBar = ({}) =>
    <nav className="NavBar flex justify-between bg-slate-100 text-slate-600">
        <a href='/' className='text-[35px] ml-14 py-3'>Title</a>
        <ul className="flex my-auto mr-8">
            <li><a href="/">Home</a></li>
            <li><a href="/">Page 1</a></li>
            <li><a href="/">Page 2</a></li>
        </ul>
    </nav>