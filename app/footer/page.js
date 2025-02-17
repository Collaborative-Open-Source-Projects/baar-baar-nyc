import React from "react";
import "./footer.css";
import 'font-awesome/css/font-awesome.min.css';


export default function Foot() {
    return (
        <footer className="footer-centered">
            <div className="footer-logo">
                <img src="/images/FooterLogo.png" alt="Logo" />
                <a>© 2025 Baar Baar Site by PSD</a>
            </div>
           
            <div className="footer-top">
                <div className="footer-dining">
                    <h3>Dining Hours</h3>
                    <h1>Dinner</h1>
                    <p>Tuesday to Thursday: 5:00pm to 11:00pm</p>
                    <p>Friday: 5:00pm to 12:00am</p>
                    <p>Saturday: 5:30pm to 12:00am</p>
                    <p>Sunday: 5:00pm to 10:30pm</p>
                    <h2>Brunch</h2>
                    <p>Saturday & Sunday: 11:30am to 4:00pm</p>
                    <p>(Kitchen closes ONE hour before the closing time)</p>
                    <div className="footer-take-top">
                        <h3>Takeout & Delivery</h3>
                        <h1>Dinner</h1>
                        <p>Tuesday to Sunday: 5:00pm - 9:30pm</p>
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <h2>Location</h2>
                <p>13 East 1st Street</p>
                <p>New York, NY 10003</p>
                <h2>Contact</h2>
                <p><a href="mailto:info@baarbaarnyc.com">info@baarbaarnyc.com</a></p>
                <p ><a href="">212.228.1200</a></p>
            </div>

            <div className="footer-bottom">
                <h3>Follow Us</h3>
                <p><a href="#" className="social-icon"><i className="fab fa-facebook-f"></i> Facebook</a></p>
                <p><a href="#" className="social-icon"><i className="fab fa-instagram"></i> Instagram</a></p>
                <p><a href="#" className="social-icon"><i className="fab fa-twitter"></i> Twitter</a></p>
                <h1><a  href="#">Newsletter</a></h1>
            </div>
        </footer>
    );
}