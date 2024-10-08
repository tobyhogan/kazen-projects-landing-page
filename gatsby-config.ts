import type { GatsbyConfig } from "gatsby"

module.exports = {
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {

        
        trackingIds: [ "G-F6FXKFVQD7", ],

        pluginConfig: {

          head: true,

        },
    
    },},
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/icon.png"
      }
    },

    // ...
  ],

  pathPrefix: "/projects-org-landing-page",
  

}

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://tobyhogan.github.io/projects-org-landing-page`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [],
}

export default config


