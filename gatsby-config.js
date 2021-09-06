const gatsbyConfig = require("gatsby-config");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = gatsbyConfig({
  siteMetadata: {
    title: "Music Dashboard Site",
  },
  plugins: [
    "gatsby-config",
    "gatsby-plugin-flow",
    "gatsby-plugin-mdx",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
});
