const gatsbyConfig = require('gatsby-config')

module.exports = gatsbyConfig({
    siteMetadata: {
        title: "Music Dashboard Site"
    },
    plugins: [
        'gatsby-config',
        'gatsby-plugin-flow',
        'gatsby-plugin-mdx',
        'gatsby-plugin-gatsby-cloud',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `blog_posts`,
                path: `${__dirname}/blog_posts/`,
            }
        },
    ]
})
