import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Layout } from "../components/Layout";

import * as styles from "./index.module.scss";

const Home: React.FC = () => {
  const data = useStaticQuery<Queries.GetSiteMetadataTitleQuery>(graphql`
    query GetSiteMetadataTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data?.site?.siteMetadata?.title;

  return (
    <Layout siteTitle={siteTitle}>
      <p>content goes here....</p>
    </Layout>
  );
};

export default Home; // Inside the pages folder, we have to export default. Otherwise it won't get picked up.
