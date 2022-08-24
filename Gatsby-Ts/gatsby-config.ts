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
  ],
  siteMetadata: {
    siteUrl: "http://localhost:8000/",
    title: "Gatsby Example",
    description: "Gatsby Example with tips and well-known patterns",
    image: "",
  },
};
