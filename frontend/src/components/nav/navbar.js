import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../fun_finder.png"
import "../../styles/navbar.css"



class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }
    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                
                <div>
                    <Link to={'/'} > <img src={logo} className="logo" alt="logo" /></Link>
                    <Link to={'/profile'}>Profile</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <Link to={'/'} > <img src={logo} className="logo" alt="logo" /></Link>
                    <div id="logged_out">
                        <Link to={'/signup'} id="sessionlinks">Signup</Link>
                        <Link to={'/login'}id="sessionlinks">Login</Link>
                    </div>
                    
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav_header">
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;