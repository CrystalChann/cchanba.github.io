'use client'

import NavBar from "@/component/Navbar";
import React from "react";

const Project1: React.FC = () => {
  return (
    <main style={styles.main}>
      <NavBar />
      <article style={styles.article}>
        <h1 style={styles.title}>Project 1: Animal Kingdom Visiting</h1>

        {/* Overview Section */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Overview</h2>
          <p style={styles.paragraph}>
            In this project, we are making hypothesis in the situation when we have visiting students from the animal kingdom. 
            We are trying to make HKUST to be more friendly to the animal students, in the part of system, software, hardware, and more.   
          </p>
        </section>

        {/* Goal Section */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Goal</h2>
          <p style={styles.paragraph}>
            The project is related to the well-being of the visiting students from animal kingdom as a matter of course. 
            Yet the real goal of this project is to let the students in COMP4461 to understand more in design thinking.
            In this project, we will learn the process of designing a solution from finding the nache by imagine potential interstellar members, 
            consider their characteristics to be an extreme version of the existing problems to get a ideation of possible problems, and
            finally create a mindmap as the documentation of the project.
          </p>
        </section>

        {/* Learning and Execution Section */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Learning and Execution</h2>
          <p style={styles.paragraph}>
          </p>
        </section>

        {/* Use of AI Section */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Use of AI</h2>
          <p style={styles.paragraph}>
            AI is not used in this project.
          </p>
        </section>

        {/* Personal Contributions and Achievements Section */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Personal Contributions and Achievements</h2>
          <p style={styles.paragraph}>
          </p>
        </section>

        {/* Reflection Section */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Reflection</h2>
          <p style={styles.paragraph}>
          </p>
        </section>
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

export default Project1;