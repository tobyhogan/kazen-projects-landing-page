import type { GatsbyConfig } from "gatsby"

module.exports = {
  flags: {
    DEV_SSR: true
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/icon.png"
      }
    },

    // ...
  ],

  pathPrefix: "/tsx-gatsby-tailwind-landing-template",
  

}

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://tobyhogan.github.io/tsx-gatsby-tailwind-landing-template`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [],
}

export default config


