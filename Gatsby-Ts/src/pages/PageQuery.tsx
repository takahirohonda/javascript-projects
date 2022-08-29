import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

export const query = graphql`
  query DataStageJoin3ImageQuery {
    file(name: { eq: "DataStage_Join_3" }) {
      childrenImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`

const About: React.FC = ({ data }: any) => (
  <Layout siteTitle="About Page">
    <p>This page is just to show PageQuery</p>
    <p>
      Gatsby has 2 ways to do queries: PageQuery and StaticPage. PageQuery is
      the original way for Gatsby to query. It is more complicated than learning
      StaticQuery. It can load the page context, which maybe helpful to get 3rd
      party data.
    </p>
    <Link to="/">Back to home</Link>

    <p>{JSON.stringify(data)}</p>
    {/* This is not working yet... */}
    <GatsbyImage image={getImage(data.file)} alt="datastage-lookup" />
  </Layout>
)

export default About
