import React from 'react';

const Footer = () => {
    return (
        <div className="bg-secondary ">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <p className="m-0 text-center text-light">Creative golB is part of Future plc, an international media group and leading digital publisher.<span className="fw-bolder text-light">Visit our corporate site.</span></p>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-light">
                            <p>About us</p>
                            <p>Advertise with us</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-light">
                            <p>
                                Terms and conditions</p>
                            <p>Accessibility Statement</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-light">
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-light">
                            <p>Cookies Policy</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-light">© Future Publishing Limited Quay House, The Ambury, Bath BA1 1UA. All rights reserved. England and Wales company registration number 2008885.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;