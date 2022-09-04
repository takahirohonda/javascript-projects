import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

import * as styles from './index.module.scss'

const Home: React.FC = () => {
  const data = useStaticQuery<Queries.getMdxDataForBlogListAndGetSiteMetadataTitleQuery>(graphql`
    query getMdxDataForBlogListAndGetSiteMetadataTitle {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            date
            description
            slug
          }
        }
      }
    }
  `)

  const siteTitle = data?.site?.siteMetadata?.title

  const posts = data.allMdx.nodes

  return (
    <Layout siteTitle={siteTitle}>
      <h2 className={styles.blogPostListHeader}>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Home // Inside the pages folder, we have to export default. Otherwise it won't get picked up.
