import React, { ReactNode } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Seo } from "../components/Seo";

import * as styles from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: URL;
  path?: string;
  siteTitle: string;
}

export const Layout = (props: LayoutProps) => {
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
  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const siteUrl = new URL(props.image || defaults.siteUrl, defaults.siteUrl);
  const image = new URL(props.path || defaults.image, defaults.siteUrl);

  return (
    <>
      <Seo
        title={title}
        description={description}
        siteUrl={siteUrl}
        image={image}
      />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </nav>
      <main>
        <h1 className={styles.header}>{props.siteTitle}</h1>
        {props.children}
      </main>
    </>
  );
};
