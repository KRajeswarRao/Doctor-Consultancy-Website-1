import React from 'react'
import './NewFootercss.css'

function NewFooter() {
    return (
        <>
            <footer id="footer" class="section footer">
                <div class="container">
                    <div class="footer-container">
                        <div class="footer-center">
                            <h3>EXTRAS</h3>
                            <a href="#">Brands</a>
                            <a href="#">Gift Certificates</a>
                            <a href="#">Affiliate</a>
                            <a href="#">Specials</a>
                            <a href="#">Site Map</a>
                        </div>
                        <div class="footer-center">
                            <h3>INFORMATION</h3>
                            <a href="#">About Us</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Site Map</a>
                        </div>
                        <div class="footer-center">
                            <h3>MY ACCOUNT</h3>
                            <a href="#">My Account</a>
                            <a href="#">Order History</a>
                            <a href="#">Wish List</a>
                            <a href="#">Newsletter</a>
                            <a href="#">Returns</a>
                        </div>
                        <div class="footer-center">
                            <h3>CONTACT US</h3>
                            <div>
                                <span>
                                    <i class="fas fa-map-marker-alt"></i>
                                </span> 42 Washington, Leen Street, 4039 Dreamville,USA
                            </div>
                            <div>
                                <span>
                                    <i class="far fa-envelope"></i>
                                </span> mystore@gmail.com
                            </div>
                            <div>
                                <span>
                                    <i class="fas fa-phone"></i>
                                </span> 456-456-4512
                            </div>
                            <div>
                                <span>
                                    <i class="far fa-paper-plane"></i>
                                </span> Dream City, USA
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </footer>
        </>
    )
}

export default NewFooter
