import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import whiteLogo from '../../assets/images/logo-black.png'
import blackLogo from '../../assets/images/logo-black.png'
import '../../assets/CSS/Custom.css'
import '../../assets/CSS/bootstrap.min.css'
class TopNavigation extends Component {
    constructor() {
        super();
        this.state = {
            navBarTitle: 'navTitle',
            navBarLogo: [whiteLogo],
            navBarBack: 'navBackground',
            navBarItem: 'navItem',
            navVariant: "dark",
        }

    }
    //scroll
    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarLogo: [whiteLogo],
                navBarBack: 'navBackgroundScroll',
                navBarItem: 'navItemScroll',
                navVariant: 'light'
            })
        }else if (window.scrollY < 100){
            this.setState({
                navBarTitle: 'navTitle',
                navBarLogo: [blackLogo],
                navBarBack: 'navBackground',
                navBarItem: 'navItem',
                navVariant: 'dark'
            })
        }
    };
    // component lifecycle method
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed={"top"} collapseOnSelect expand="lg" >
                    <Navbar.Brand className={this.state.navBarTitle}>
                        <img src={this.state.navBarLogo} alt="" className="pr-2"/>
                         ASH ASTRO
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">SERVICES</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">COURSES</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;