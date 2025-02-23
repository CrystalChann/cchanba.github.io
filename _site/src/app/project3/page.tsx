'use client'

import NavBar from "@/component/Navbar";
import React from "react";

const Project3: React.FC = () => {
  return (
    <main style={styles.main}>
      <NavBar />
      <article style={styles.article}>
        <h1 style={styles.title}>Project 3: Not Done Yet</h1>

      </article>
    </main>
  );
};

// Styles
const styles = {
  main: {
    justifyContent: "center",
    padding: "20px",
  },
  article: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "30px",
  },
  heading: {
    fontSize: "1.8rem",
    color: "#444",
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#555",
  },
};

export default Project3;