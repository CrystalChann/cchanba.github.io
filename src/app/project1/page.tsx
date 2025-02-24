"use client";

import NavBar from "@/component/Navbar";
import React from "react";
import Image from "next/image";

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
            In this project, we are making hypothesis in the situation when we
            have visiting students from the animal kingdom. We are trying to
            make HKUST to be more friendly to the animal students, in the part
            of system, software, hardware, and more.
          </p>
        </section>

        {/* Goal Section */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Goal</h2>
          <p style={styles.paragraph}>
            The project is related to the well-being of the visiting students
            from animal kingdom as a matter of course. Yet the real goal of this
            project is to let the students in COMP4461 to understand more in
            design thinking. In this project, we will learn the process of
            designing a solution from finding the nache by imagine potential
            interstellar members, consider their characteristics to be an
            extreme version of the existing problems to get a ideation of
            possible problems, and finally create a mindmap as the documentation
            of the project.
          </p>
        </section>

        {/* Learning and Execution Section */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Learning and Execution</h2>
          <p style={styles.paragraph}>
            In this process, we started to understand the concept of empathize
            and ideation. To first start with a user need instead of a problem
            or a solution, we try to observe and brainstorm with the possible
            issues and characteristics of the animals. Drawing out user scenario
            that is minority and specific to human being.
          </p>
          <br />
          <p style={styles.paragraph}>
            As we are unable to observe the animals visiting students, and also
            cannot collect the self-reported diaries in this case, we try to do
            it by imagination and google search on animal characteristics and
            compare with ourselves on the differences.
          </p>
          <p style={styles.paragraph}>
            We end up with getting the following mindmap as a draft:
          </p>
          <Image
            src={require("public/mindmap_draft.jpg")}
            alt="mindmap_draft"
            width="800"
            height="600"
          />
          <p style={styles.paragraph}>
            In addition, create a pettier version of the mindmap after the
            lecture and after our brainstorm:
          </p>
          <Image
            src={require("public/mindmap.jpg")}
            alt="mindmap"
            width="1200"
            height="500"
          />
          <p style={styles.paragraph}>
            In this mindmap, we can observe that the main four improvement can
            be done based on the body differences, eating habbit, living
            environment, and culture differences. The one thing that our group
            believe is interesting to talk about is the body difference.
            Especically the issue of color blind and no finger for some of the
            animals. We believe it can be improved in the point of hardware and
            software, to provide color blind friendly glasses, and not to use
            any fingerprint/ require hand holding.
          </p>
        </section>

        {/* Use of AI Section */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Use of AI</h2>
          <p style={styles.paragraph}>
            AI is not used in this project. We decided to think with our
            observation pervoiusly and our life experience to see what is the
            POV of the animals. Google is used for fact checking.
          </p>
        </section>

        {/* Personal Contributions and Achievements Section */}
        <section style={styles.section}>
          <h2 style={styles.heading}>
            Personal Contributions and Achievements
          </h2>
          <p style={styles.paragraph}>
            We did group discussion on the project, where most of us provide
            interesting observation and common sense knowledge. For my part, I
            did the draft direction on mindmap, and give out idea on some of the
            point of the mindmap, including color blind, temperature, and more.
          </p>
        </section>

        {/* Reflection Section */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Reflection</h2>
          <p style={styles.paragraph}>
            This is our very first project, and through it, we got to know each other as teammates. 
            We discovered that everyone is incredibly creative! Despite the cultural differences and varying mindsets from
            different fields of study, we were able to generate more ideas and provide niche solutions. 
            Although this project was just a trial for us, it helped us develop skills in observation, ideation, and
            organizing our thoughts in a more logical way. The most rewarding part was brainstorming the characteristics of our target group.
            We hadn't realized how many inconveniences certain groups faced until
            we worked on this project. I am very excited and look forward to the next project!
          </p>
        </section>

        {/* Groupmate Section */}
        <section style={styles.section}>
          <h2 style={styles.heading}>My Groupmate</h2>
          <p style={styles.paragraph}>Sammy GUO (SENG)</p>
          <p style={styles.paragraph}>Ziyao WU (ISD)</p>
          <p style={styles.paragraph}>Freja, Noergaard JENSEN (SSCI)</p>
          <p style={styles.paragraph}>Crystal, Ching CHAN (CPEG)</p>
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
  image: {
    borderRadius: "50%",
  },
};

export default Project1;
