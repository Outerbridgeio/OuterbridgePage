import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavBarCollapse: false,
      toggleDropDown: false,
    };

  }

  componentDidMount() {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        this.setState({
          isNavBarCollapse: false
        })
      } else {
        this.setState({
          isNavBarCollapse: true
        })
      }
    };
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  toggleNavBarClicked = () => {
    this.setState({
      toggleDropDown: !this.state.toggleDropDown
    })
  }

  render() {

    return (

      <nav style={{background: this.state.isNavBarCollapse ? '#ffffff' : `linear-gradient(to right, #ffffff, #ffffff)`, backgroundColor: this.state.isNavBarCollapse ? '#ffffff' : null}} className={this.state.isNavBarCollapse ? "navbar navbar-expand-lg navbar-light navbar-custom fixed-top top-nav-collapse" : this.state.toggleDropDown ? "navbar navbar-expand-lg navbar-light navbar-custom fixed-top" : "navbar navbar-expand-lg navbar-light navbar-custom fixed-top"}>
          <div className="container">

              <a className ="navbar-brand logo-image" href="/">
                <img
                  src="/outerbridge_brand.svg"
                  alt="Outerbridge Logo"
                  height={60}
                  width={250}
                />
              </a> 
            
              <button onClick={e => this.toggleNavBarClicked()} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-awesome fas fa-bars"></span>
                  <span className="navbar-toggler-awesome fas fa-times"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <a style={{cursor: 'pointer', color: 'black'}} className="nav-link" onClick={e => this.props.whyUsClicked(e)} href={null} >WHY US <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a style={{cursor: 'pointer', color: 'black'}} className="nav-link" onClick={e => this.props.featureClicked(e)} href={null} >FEATURES</a>
                      </li>
                      <li className="nav-item">
                          <a style={{cursor: 'pointer', color: 'black'}} className="nav-link" onClick={e => this.props.integrationClicked(e)} href={null} >INTEGRATIONS</a>
                      </li>
                  </ul>
                  <span className="nav-item">
                      <a style={{cursor: 'pointer'}} className="btn-outline-sm" href="https://github.com/Outerbridgeio/Outerbridge" target="_blank" ><i className="fab fa-github"></i>&nbsp;&nbsp;VIEW GITHUB</a>
                  </span>
              </div>
          </div> 
      </nav>
    );
  }
};

NavBar.propTypes = {
  theme: PropTypes.string,
};

export default NavBar;
