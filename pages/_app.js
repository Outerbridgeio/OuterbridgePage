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
          title='Outerbridge - Workflow Automation'
          description='Outerbridge is a low code/no code workflow automation application, focusing on integrating both on-chain and off-chain applications.'
          openGraph= {{
            type: 'website',
            locale: 'en_IE',
            url: 'https://www.outerbridge.io',
            title: 'Outerbridge - Workflow Automation',
            description: 'Outerbridge is a low code/no code workflow automation application, focusing on integrating both on-chain and off-chain applications.',
            images: [],
            site_name: 'Outerbridge.io',
          }}
          twitter= {{
            handle: '@OuterbridgeIO',
            site: '@OuterbridgeIO',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}