/**
 * @type {import('gatsby').GatsbyConfig}
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
  {
    resolve: 'gatsby-plugin-algolia',
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries: require("./src/utils/algolia-queries")
    },
  },
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-plugin-styled-components", 
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-NE1MG8H38R", // Google Analytics / GA
        // AdWords & Google Ads ID
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      // gtagConfig: {
      //   optimize_id: "OPT_CONTAINER_ID",
      //   anonymize_ip: true,
      //   cookie_expires: 0,
      // },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is also optional [sets Respect Do Not Track]
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  },
  "gatsby-plugin-sitemap", 
  {
    resolve: 'gatsby-plugin-sanity-image',
    options: {
      projectId: '1ei8rzqn',
      dataset: 'production',
    }
  },
  {
    resolve: "gatsby-plugin-robots-txt",
    options: {
      host: 'https://isyourwebsitegood.com',
      sitemap: 'https://isyourwebsitegood.com/sitemap/sitemap-index.xml',
      policy: [
        {
          userAgent: '*',
          allow: '/',
        }
      ]
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};