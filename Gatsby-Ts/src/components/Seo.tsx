import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SeoProps {
  title: string;
  description: string;
  image: string;
  path: string;
}
export const Seo = (props: SeoProps) => {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
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
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="description" />
      <link rel="canonical" href={siteUrl as any} />
      {image && <meta name="image" content={image as any} />}
    </Helmet>
  );
};
