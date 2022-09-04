import { ReactNode } from 'react'
import Layout from './Layout'

interface PostLayoutProps {
  children: ReactNode;
  pageContext: any;
}
export const PostLayout = ({ children, pageContext }: PostLayoutProps) => {
  const { title, description } = pageContext.frontmatter

  return (
    <Layout siteTitle={title} description={description}>
      {children}
    </Layout>
  )
}
