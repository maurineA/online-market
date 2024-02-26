import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>About Us</h5>
                        <p>Online market to improve trade worldwide.</p>
                    </div>
                    <div className="col-md-6">
                        <h5>Contact Us</h5>
                        <address>
                            123 Main Street <br />
                            City, State, Zip <br />
                            Country: Kenya <br />
                            <i className="bi bi-envelope"></i> onlinemarketing@example.com <br />
                            <i className="bi bi-phone"></i> +2544567890
                        </address>
                    </div>
                </div>
                <hr className="bg-light" /> 
                <div className="row mt-3">
                    <div className="col-md-12 text-center">
                        <p>&copy; 2024 Online market. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
