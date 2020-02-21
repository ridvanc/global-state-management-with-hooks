import React, {useState} from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from "react-router-dom";

const Header = () => {
    const [open,setOpen] = useState(false);
    const  toggle = () => {
        setOpen(!open);
    };
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={Link} to="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={() => this.toggle()}/>
                <Collapse isOpen={open} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/home">Todos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/users">Users</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/about">About</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;