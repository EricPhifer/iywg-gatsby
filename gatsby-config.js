/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Is Your Website Good?`,
    siteUrl: `https://isyourwebsitegood.com`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "1ei8rzqn",
      "dataset": "production"
    }
  }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-plugin-styled-components", 
  "gatsby-plugin-google-gtag", 
  "gatsby-plugin-sitemap", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};