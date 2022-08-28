import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const About: React.FC = () => (
  <Layout siteTitle="About Page">
    <p>This is about page</p>
    <Link to="/">Back to home</Link>
  </Layout>
);

export default About;
