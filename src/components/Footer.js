import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    render() {
      return (
            <div className="container-fluid text-center">
                <div className="row" id="footer">
                    <div className="col-sm-4">
                        <h3>Contact us</h3>
                        <br/>
                        <h4>Our address and contact info here</h4>
                    </div>
                    <div className="col-sm-4">
                        <h3>Connect</h3>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-google"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                        <a href="#" className="fa fa-youtube"></a>
                    </div>
                    <div className="col-sm-4">
                        <img src="images/books.gif" className="icon"/>
                    </div>
                </div>
            </div>
      );
    }
}

export default Footer;