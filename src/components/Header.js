import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
      return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#theNavBar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"><h1>Books Library</h1></a>
                    </div>
                    <div className="collapse navbar-collapse" id="theNavBar">
                        <ul className="nav navbar-nav navbar-rigth">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
      );
    }
}

export default Header;