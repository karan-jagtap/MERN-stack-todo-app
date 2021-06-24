import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends React.Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="dark" dark={true} expand="md">
          <Link to="/" >
            <NavbarBrand className="ml-auto">
              <h2 className="my-auto"><i className="fas fa-bookmark mr-4"></i>Todo App</h2>
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto my-auto" navbar>
              <NavItem className="mr-2" color="light">
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem className="mr-2" color="light">
                <NavLink href="/account">Account</NavLink>
              </NavItem>
              <NavItem className="mr-2">
                <NavLink target="_blank" href="https://github.com/kmessilj/MERN-stack-todo-app"><i className="fab fa-github mr-1"></i>Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;