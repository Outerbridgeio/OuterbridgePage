import React, { Component } from 'react';
import { banner } from "../../../variables";
import color from "../../../assets/color"
import PropTypes from 'prop-types';
import Image from 'next/image'

class Banner extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
                <div style={{position: 'absolute', top: 0, left: 0, height: 180, width: '100%', background: '#ffffff'}}/>

                <div style={{display: 'inline-block', position: 'absolute', width: '100%', overflow: 'hidden', top: 180, left: 0 }}> 
                    <svg syle={{display: 'inline-block', position: 'absolute', top: 180, left: 0}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 520" height="520" width="100%" preserveAspectRatio="none"><path fill="#ffffff" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,165.3C480,149,600,139,720,160C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                </div> 


                <div id="header" className="header" style={{background: `linear-gradient(to right, ${color.primaryLight}, ${color.primaryLight})`,}}>
                    <div className="header-content">
                        <div className="container">
                            <div className="row">
                                <div style={{display: 'flex', justifyContent: 'center', alignSelf: 'center'}} className="col-lg-5 col-xl-5">
                                    <div className="">
                                        <h1>{banner.title}</h1>
                                        <p className="p-large">{banner.subTitle}</p>
                                        <a style={{marginBottom: 20, cursor: 'pointer'}} className="btn-solid-lg page-scroll" href="https://demo.outerbridge.io" target="_blank"><i className="fas fa-rocket"></i>&nbsp;&nbsp;View Demo</a>
                                        <a style={{marginBottom: 20, cursor: 'pointer'}} className="btn-contained-lg page-scroll" href="https://github.com/Outerbridgeio/Outerbridge" target="_blank"><i className="fab fa-github"></i>&nbsp;&nbsp;&nbsp;View Github</a>
                                    </div>
                                </div> 
                                <div className="col-lg-7 col-xl-7">
                                    <div className="img-wrapper-mobile" style={{margin: 'auto'}} >
                                        <img
                                            src="/banner_svg.svg"
                                            alt="Outerbridge Banner"
                                            style={{ height: 'auto', width: '100%' }}
                                        />
                                    </div>   
                                </div> 
                            </div> 
                        </div>
                    </div> 
                </div>

                
            </div>
   );
}
};

Banner.propTypes = {
    theme: PropTypes.string,
};

export default Banner;
