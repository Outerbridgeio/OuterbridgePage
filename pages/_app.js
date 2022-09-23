import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/css/swiper.min.css'
import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import React from 'react';

export default class OuterbridgeApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <DefaultSeo 
          title='Outerbridge - Web3 + Web2 Workflow Automation'
          description='Outerbridge is an open source low code/no code workflow automation application, focusing on integrating both on-chain and off-chain applications.'
          openGraph= {{
            type: 'website',
            locale: 'en_IE',
            url: 'https://www.outerbridge.io',
            title: 'Outerbridge - Web3 + Web2 Workflow Automation',
            description: 'Outerbridge is an open source low code/no code workflow automation application, focusing on integrating both on-chain and off-chain applications.',
            images: [{
              url: 'https://outerbridgepage.s3.eu-west-1.amazonaws.com/outerbridge_logo_dark.png',
              alt: 'Outerbridge Logo'
            }],
            site_name: 'Outerbridge.io',
          }}
          twitter= {{
            handle: '@Outerbridge_IO',
            site: '@Outerbridge_IO',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}