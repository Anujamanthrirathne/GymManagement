import React, { useState } from 'react';
import './Header.css';
import Logo from '../assets/logo.png';
import Bars from '../assets/bars.png';
import {Link} from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      {(menuOpened === false && mobile === true) ? (
        <div onClick={() => setMenuOpened(true)} className="menu-icon">
          <img src={Bars} alt="Menu Icon" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (
        <ul className="header-menu">
           <li>
            <Link 
             onClick={()=> setMenuOpened(false)}
             activeClass="active"
             to="header"
             spy={true}
             smooth={true}
             >
              Home
             </Link>
           </li>

           <li>
            <Link 
             onClick={()=> setMenuOpened(false)}
             to="programs"
             spy={true}
             smooth={true}
             >
              Programs
             </Link>
           </li>

           <li>
            <Link 
             onClick={()=> setMenuOpened(false)}
             to="reasons"
             spy={true}
             smooth={true}
             >
              Why us
             </Link>
           </li>

           <li>
            <Link 
             onClick={()=> setMenuOpened(false)}
             to="plans"
             spy={true}
             smooth={true}
             >
             plans
             </Link>
           </li>

           <li>
            <Link 
             onClick={()=> setMenuOpened(false)}
             to="testimonials"
             spy={true}
             smooth={true}
             >
              Testimonials
             </Link>
           </li>
           
        </ul>
      )}
    </div>
  );
};

export default Header;
