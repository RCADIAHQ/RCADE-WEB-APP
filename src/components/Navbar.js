import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { ConnectKitButton } from 'connectkit';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <> 
      <div className='navbar'>
        <Link to="#" className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
           {/* New button/icon to the right */}
           <div className='nav-menu-right'>
          <Link to="/settings" className='menu-bars'>
            <ConnectKitButton></ConnectKitButton>
          </Link>
        </div>

      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className="navbar-toggle">
            <Link to="#" className='menu-bars'>
              <IoMdCloseCircleOutline onClick={showSidebar}/>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
             <li key={index} className={item.cName} >
              <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
              </Link>
             </li>
            )
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
