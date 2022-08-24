# 1. Gatsby Link component

Always use `<Link>`.
If you use `<a>` it does full page refresh. Link doesn't do full page refresh and it is quick. It also start prefetching the page when you hover over! You can see it in the network tab!

# 2. SEO

```bash
yarn add react-helmet gatsby-plugin-react-helmet
yarn add @types/react-helmet -D
```

Add `gatsby-plugin-react-helmet` to `gatsby-config.ts`
