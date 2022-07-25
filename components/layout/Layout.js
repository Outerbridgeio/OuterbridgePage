import Head from 'next/head'
import React from "react";
import Router from 'next/router'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    Router.events.on('routeChangeComplete', () => { window.scrollTo(0, 0); });
  }

  render() {

    const {
      children,
      title
    } = this.props;

    return (
      <div>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
            <meta name="author" content="Approto"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
          
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118965717-3"></script>
          
            <link href="/static/css/9.099cafef.chunk.css" rel="stylesheet"/>
            <link href="/static/css/main.4ac54e74.chunk.css" rel="stylesheet"/>

            <link
              rel="preload"
              href="/fonts/Muli.ttf"
              as="font"
              crossOrigin=""
            />
        </Head>
    
        <div id="main">
          {children}
        </div>

      </div>
    )
  }
}

export default Layout;