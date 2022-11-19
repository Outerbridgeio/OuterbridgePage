import React, { Component } from 'react';
import color from '../../assets/color'
import PropTypes from 'prop-types';
import Image from 'next/image'

class Footer extends Component {

    constructor(props) {
      super(props);
    }

    render() {

        return (
        
        <div>
            <div style={{background: '#3f2b61'}} className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-col first">
                                
                                <a className ="navbar-brand logo-image" href="/">
                                    <img
                                        src="/outerbridge_brand_white.svg"
                                        alt="Outerbridge Logo"
                                        height={50}
                                        width={200}
                                    />
                                </a> 
                                <p className="p-small">Automate Web3 and Web2 applications</p>
                            </div>
                        </div> 
                        <div className="col-md-4">
                            <div className="footer-col middle">
                                <h4>Sections</h4>
                                <ul className="list-unstyled li-space-lg p-small">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <li className="media">
                                                <a className="white" href="#" onClick={e => this.props.whyUsClicked(e)} >Why Us</a>
                                            </li>
                                            <li className="media">
                                                <a className="white" href="#" onClick={e=>this.props.featureClicked(e)} >Features</a>
                                            </li>
                                            <li className="media">
                                                <a className="white" href="#" onClick={e=>this.props.integrationClicked(e)} >Integrations</a>
                                            </li>
                                            <li className="media">
                                                <a className="white" href="/privacy" target="_blank" >Privacy Policy</a>
                                            </li>
                                        </div>
                                        <div className="col-md-6">
                                            <li className="media">
                                                <a className="white" href="https://github.com/Outerbridgeio/Outerbridge" target="_blank" >View Github</a>
                                            </li>
                                            <li className="media">
                                                <a className="white" href="https://docs.outerbridge.io" target="_blank" >View Docs</a>
                                            </li>
                                            <li className="media">
                                                <a className="white" href="https://demo.outerbridge.io" target="_blank" >View Demo</a>
                                            </li>
                                            <li className="media">
                                                <a className="white" href="/terms" target="_blank" >Terms of Use</a>
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div> 
                        <div className="col-md-4">
                            <div className="footer-col last">
                                <h4>Contact</h4>
                                <ul className="list-unstyled li-space-lg p-small">
                                    <li className="media">
                                        <i className="fas fa-envelope"></i>
                                        <div className="media-body"><a className="white" href="mailto:hello@outerbridge.io">hello@outerbridge.io</a></div>
                                    </li>
                                    <li className="media">
                                        <i className="fab fa-twitter mt-1"></i>
                                        <div className="media-body"><a className="white" href="https://twitter.com/Outerbridge_IO">@Outerbridge_IO</a></div>
                                    </li>
                                    <li className="media">
                                        <i className="fab fa-discord mt-1"></i>
                                        <div className="media-body"><a className="white" href="https://discord.gg/Y9VE4ykPDJ">OuterbridgeIO</a></div>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                </div>
            </div> 

            <div style={{background: '#3f2b61'}} className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="p-small">Copyright © 2022 Outerbridge</p>
                        </div> 
                    </div> 
                </div>
            </div>
        </div>
  );
}
};

Footer.propTypes = {
  theme: PropTypes.string,
};

export default Footer;
