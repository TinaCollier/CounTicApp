import React, { 
  useState, 
  useContext 
} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import logo from './images/counticlogo.svg';
import UserContext from '../context/UserContext';

function NavBar(props) {
  const [collapsed, setCollapsed] = useState(true);
  const { name, loggedIn, setId, setName, setEmail, setPassword, setEventHistory, setLoggedIn } = useContext( UserContext );
  const toggleNavbar = () => setCollapsed(!collapsed);
  const handleLogOut = () => {
    setId( 0 );
    setName( '' );
    setEmail( '' );
    setPassword( '' );
    setEventHistory( [] );
    setLoggedIn( false );
  }

  return (
    <div>
      <Navbar dark>
        <NavbarBrand href="/" className="me-auto">
            <img
            alt="logo"
            src={ logo }
            style={{
            height: 40,
            width: 40
            }}
        />
          CounTic
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            { loggedIn ? 
            <NavbarText>Logged in as { name } </NavbarText>
            :
            <NavItem>
              <NavLink href="/login">
                Login
              </NavLink>
            </NavItem>
            }
            <NavItem>
              <NavLink href="/trackerpage">
                Tracker Page
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/completedevents">
                Completed Events
              </NavLink>
            </NavItem>
            { loggedIn ? 
              <NavItem href="/">
                <NavLink onClick={ handleLogOut }>
                 Log Out
                </NavLink>
              </NavItem>
                :
              <></>
                }
          </Nav>
        </Collapse>

      </Navbar>
    </div>
  );
}

export default NavBar;