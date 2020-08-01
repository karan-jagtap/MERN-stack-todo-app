import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
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
                <NavLink href="#"><i className="fas fa-list-alt mr-1"></i>Todos</NavLink>
              </NavItem>
              <NavItem className="mr-2">
                <NavLink href="#"><i className="fas fa-plus-square mr-1"></i>Add</NavLink>
              </NavItem>
              <NavItem className="mr-2">
                <NavLink href="#"><i className="fas fa-pen mr-1"></i>Update</NavLink>
              </NavItem>
              <NavItem className="mr-2">
                <NavLink href="#"><i className="fas fa-trash-alt mr-1"></i>Delete</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;