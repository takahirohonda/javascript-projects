import React from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.scss";

const About: React.FC = () => (
  <main>
    <h1 className={styles.header}>About Page</h1>
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
  </main>
);

export default About; // Inside the pages folder, we have to export default. Otherwise it won't get picked up.
