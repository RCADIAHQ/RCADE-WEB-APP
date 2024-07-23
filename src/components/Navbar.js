import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { ConnectKitButton } from 'connectkit';
import useGetRnsFromAddress from '../hooks/useGetRnsFromAddress';
import { shortenAddress } from '../lib/helpers';


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
            <ConnectKitButton.Custom>
              {({ isConnected, isConnecting, show, hide, address, chain }) => {
                return (
                  <WalletButton isConnected={isConnected} isConnecting={isConnecting} show={show} address={address} />
                );
              }}
            </ConnectKitButton.Custom>
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
              <Link to={item.path} onClick={showSidebar}>
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


const WalletButton = ({ isConnected, isConnecting, show, address }) => {

  const rnsName = useGetRnsFromAddress(address);

  const buttonStyle = {
    backgroundColor: "#ca1dcd",
    color: "#150112",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <button onClick={show} style={buttonStyle} >
      {isConnected ? (rnsName ?? shortenAddress(address)) : (isConnecting ? "Connecting" : "Connect Wallet")}
    </button>
  );
}