import React, { Component } from 'react';
import {Link} from 'react-router';
import {NavbarBrand, NavbarToggler,Collapse} from 'reactstrap';

class Header extends Component {
  state = {isOpen:false};
  toggle(){
      this.setState({isOpen:!this.state.isOpen});
  }
  renderLinks(){
      return[
            <li className="nav-item" key={2}>
                <Link to='/user' className='nav-link'>User</Link>
            </li>,
            <li className="nav-item" key={3}>
                <Link to='/role' className='nav-link'>Role</Link>
            </li>
      ];
  }
  render() {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
            <NavbarBrand href="/">itService</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <ul className="navbar-nav">
                    {this.renderLinks()}
                </ul>
            </Collapse> 
      </nav>
    );
  }
}

export default Header;