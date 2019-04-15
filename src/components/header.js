import React, { Component } from 'react';
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
    DropdownItem
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (

            <div className="w3-top">
                <div className="w3-bar" id="myNavbar">
                    <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" title="Toggle Navigation Menu">
                        <i className="fa fa-bars" />
                    </a>
                    <a href="#about" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-user" /> ABOUT</a>
                    <a href="#portfolio" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-th" /> PORTFOLIO</a>
                    <a href="#contact" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-envelope" /> CONTACT</a>
                    <a href="https://www.linkedin.com/in/tom-na-thalang" className="w3-bar-item w3-button w3-hide-small"><i class="fab fa-linkedin-in"></i> LINKEDIN </a>
                    <a href="https://www.instagram.com/itsdrunksushi/" className="w3-bar-item w3-button w3-hide-small"><i class="fab fa-instagram"></i> INSTAGRAM </a>
                </div>
                {/* Navbar on small screens */}
                <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                    <a href="#about" className="w3-bar-item w3-button" >ABOUT</a>
                    <a href="#portfolio" className="w3-bar-item w3-button" >PORTFOLIO</a>
                    <a href="#contact" className="w3-bar-item w3-button" >CONTACT</a>
                </div>
            </div>
        );
    }
}

export default Header;
