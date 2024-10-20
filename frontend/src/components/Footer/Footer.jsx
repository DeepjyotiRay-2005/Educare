import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo-wrapper">
                <h1 className="logo"><i className="fa-solid fa-graduation-cap"></i> Educare</h1>
            </div>
            <div className="follow">
                <h2>Follow Us</h2>
                <div className="icons">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-facebook"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="links">
                <h2>Useful Links</h2>
                <ul>
                    <li><Link to='/projects'>Our Projects</Link></li>
                    <li><Link to='/faqs'>FAQs</Link></li>
                    <li><Link to='/news'>News and Updates</Link></li>
                </ul>
            </div>
            <div className="contacts">
                <h2>Contacts</h2>
                <ul>
                    <li>Address : 4-5 Main road, Delhi</li>
                    <li><a href="mailto:educare@gmail.com">Email: educare@gmail.com</a></li>
                    <li><a href="tel:+914533433265">Phone Number: +91 4533433265</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
