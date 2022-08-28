// Defines site's metadata, plugins, other general config
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/

// This is used only for getting gatsby-plugin-ts-config setup.
// One JS file is required to have the plugin setup.
// The rest can be typescripts

module.exports = {
  graphqlTypegen: {
    typesOutputPath: `src/types/gatsby-types.d.ts`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-dts-css-modules",
    "gatsby-plugin-react-helmet",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        // This doesn't work
        // defaultLayouts: {
        //   posts: require.resolve(`${__dirname}src/components/Layout.tsx`),
        // },
      },
    },
  ],
  siteMetadata: {
    siteUrl: "http://localhost:8000/",
    title: "Gatsby Example",
    description: "Gatsby Example with tips and well-known patterns",
    image: "",
  },
};
