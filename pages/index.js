import Home from './home/Home';
import React, { Component } from 'react';
import Layout from '../components/layout/Layout'

class App extends Component {

  render() {
    return (
        <Layout>
          <Home/>
        </Layout>
    );
  }
}

export default App;
