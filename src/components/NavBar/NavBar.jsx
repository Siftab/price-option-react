import { useState } from "react";
import LinkNav from "../LinkNav.jsx/LinkNav";
import {BiMenu,BiPowerOff} from 'react-icons/bi'

const NavBar = () => {
    const [open,setOpen] =useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/404', name: '404' }
      ];
      
    return (
        <nav>
               <div className="md:hidden text-4xl bg-yellow-100 py-7 px-8 " onClick={()=>setOpen(!open)}>
               {open === true?
               <BiPowerOff></BiPowerOff>
               :<BiMenu ></BiMenu>}
               </div>
          <ul className={`md:flex duration-700 absolute ml-10 p-4 bg-yellow-300 ${open===true? 'top-16':"-top-60"} `} >
            {/* it also can be done {open===true? '': 'hidden'} */}
          {
                routes.map(route=><LinkNav key={route.id}route={route}></LinkNav>)
            }
          </ul>
        </nav>
    );
};

export default NavBar;