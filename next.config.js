// next.config.js
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')

const nextConfig = {
  publicRuntimeConfig: {
    NODE_DEV: process.env.NODE_DEV,
  }
};

module.exports = withPlugins([withImages],nextConfig);