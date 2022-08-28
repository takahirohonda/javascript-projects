import React, { ReactNode } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Seo } from "./Seo";

import * as styles from "./layout.module.scss";
import "../styles/global.scss";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: URL;
  path?: string;
  siteTitle: string;
}

const Layout = ({
  title,
  description,
  image,
  path,
  siteTitle,
  children,
}: LayoutProps) => {
  const data = useStaticQuery<Queries.GetSiteMetadataForSeoQuery>(graphql`
    query GetSiteMetadataForSeo {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `);
  const defaults = data?.site?.siteMetadata;
  const titleHead = title || defaults.title;
  const descriptionHead = description || defaults.description;
  const siteUrl = new URL(image || defaults.siteUrl, defaults.siteUrl);
  const imageHead = new URL(path || defaults.image, defaults.siteUrl);

  return (
    <>
      <Seo
        title={titleHead}
        description={descriptionHead}
        siteUrl={siteUrl}
        image={imageHead}
      />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/PageQuery">PageQuery</Link>
      </nav>
      <main>
        <h1 className={styles.header}>{siteTitle}</h1>
        {children}
      </main>
    </>
  );
};

export default Layout;
