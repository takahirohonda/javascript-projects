import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

const About: React.FC = () => (
  <Layout siteTitle="About Page">
    <p>This is about page</p>
    <Link to="/">Back to home</Link>

    <StaticImage
      src="../images/test/DataStage_Join_1.PNG"
      alt="datastage-lookup"
      placeholder="dominantColor"
    />
  </Layout>
)

export default About
