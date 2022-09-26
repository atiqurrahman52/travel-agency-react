import { List, X } from 'phosphor-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'
import logo from '../assets/images/header/Logo.svg'






const Navbar = () => {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo lg:hidden">
            {/* CodeBucks */}
            <img src={logo} alt="" />
            
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact to="/" className="nav-logo lg:block hidden">
            {/* CodeBucks */}
            <img src={logo} alt="" />
            
          </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/destination"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Destination
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fa fa-times" : "fa fa-bars"}></i> */}
            
            {
                click?
                <X size={32} />:
                <List size={32} />
                
            }
          </div>
        </div>
      </nav>
    </ div>
    );
};

export default Navbar;









