import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "./index.module.scss";

const Home: React.FC = () => {
  const data = useStaticQuery(graphql`
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
    <main>
      <h1 className={styles.header}>{siteTitle}</h1>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <p></p>
    </main>
  );
};
export default Home; // Inside the pages folder, we have to export default. Otherwise it won't get picked up.
