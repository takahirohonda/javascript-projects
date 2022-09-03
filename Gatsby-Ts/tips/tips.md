# 1. Gatsby Link component

Always use `<Link>`.
If you use `<a>` it does full page refresh. Link doesn't do full page refresh and it is quick. It also start prefetching the page when you hover over! You can see it in the network tab!

# 3. Checking props passed in gatsby

The best way is to print them out the props.

```tsx
export const PostLayout = ({ children, ...props }: PostLayoutProps) => (
  <Layout siteTitle="">
    {children}
    <pre>{JSON.stringify(props, null, 1)}</pre>
  </Layout>
);
```

# 4. Making post layout and getting `pageContext`

We can get `pageContext` from the mdx front matter. We just need to pass the props `pageContext`.

```tsx
export const PostLayout = ({ children, pageContext }: PostLayoutProps) => {
  const { title, description } = pageContext.frontmatter;

  return (
    <Layout siteTitle={title} description={description}>
      {children}
    </Layout>
  );
};
```
