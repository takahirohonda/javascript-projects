import React from "react";
import { Helmet } from "react-helmet";

interface SeoProps {
  title?: string;
  description?: string;
  image?: URL;
  siteUrl: URL;
}
export const Seo = ({ title, description, image, siteUrl }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={siteUrl as any} />
    {image && <meta name="image" content={image as any} />}

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={siteUrl as any} />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="article" />
    {image && <meta property="og:image" content={image as any} />}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image as any} />}
  </Helmet>
);
