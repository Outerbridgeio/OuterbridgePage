
import Banner from './banner/Banner';
import Customer from './customer/Customer'
import WhyUs from './whyus/WhyUs'
import Feature1 from './feature1/Feature1'
import Feature2 from './feature2/Feature2'
import Feature3 from './feature3/Feature3'
import Feature4 from './feature4/Feature4'
import Integrations from './integrations/Integrations'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navbar/NavBar';

import React, { Component } from 'react';

class Home extends Component {

  constructor(props) {
    super(props);

    this.refObj1 = React.createRef();
    this.refObj2 = React.createRef();
    this.refObj3 = React.createRef();
    this.refObj4 = React.createRef();
    this.refObj5 = React.createRef();
  }

  exploreProductClicked(e) {
    e.preventDefault()
    this.refObj2.current.scrollIntoView({behavior: 'smooth'});
  }

  whyUsClicked(e) {
    e.preventDefault()
    this.refObj1.current.scrollIntoView({behavior: 'smooth'});
  }

  featureClicked(e) {
    e.preventDefault()
    this.refObj2.current.scrollIntoView({behavior: 'smooth'});
  }

  integrationClicked(e) {
    e.preventDefault()
    this.refObj3.current.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    return (
      
        <div id="app">
          <NavBar theme={'dark'} whyUsClicked={e=>this.whyUsClicked(e)} featureClicked={e=>this.featureClicked(e)} integrationClicked={e=>this.integrationClicked(e)} />
          
          <Banner exploreProductClicked={e=>this.exploreProductClicked(e)}/>

          <Customer/>

          <div ref={this.refObj1} > </div>
          <div style={{backgroundColor: '#F8F0FF'}}>
              <WhyUs />
          </div>

          <div ref={this.refObj2} > </div>
          <Feature1/>
          <Feature2/>
          <Feature3/>
          <Feature4/>

          <div ref={this.refObj3} > </div>
          <div style={{backgroundColor: '#F8F0FF'}}>
              <Integrations/>   
          </div>

          <Footer whyUsClicked={e=>this.whyUsClicked(e)} featureClicked={e=>this.featureClicked(e)} integrationClicked={e=>this.integrationClicked(e)} />

        
        </div>  
      
    );
  }
}

export default Home;