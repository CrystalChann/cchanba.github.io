'use client'

import React from "react";
import Image from "next/image";
import selfImage from "../../../public/IMG_20240312_092001.jpg"
import NavBar from "@/component/Navbar";

const Home: React.FC = () => {
  return (
    <main style={styles.main}>
      <NavBar />
      <div>
        <Image
          src={require('../../public/IMG_20240312_092001.jpg')}
          alt="selfImage"
          width="200"
          height="200" 
          style={styles.image}
        />
        
        { /* <h1 style={styles.name}>Hi! Crystal Here!</h1>
        <a
          href="/public/Chan_Ching_CV.pdf"
          download="Crystal_Ching_CHAN_Resume.pdf"
          style={styles.downloadLink}
        >
          Click here to download my Resume
  </a> */ }
        <p style={styles.intro}>
          Hello! My name is Crystal, Ching CHAN, and I am a final year computer engineering student studying in the HKUST (SID: 20854299).
          I am passionate about software development, game development, design, and drawing. 
          Welcome to my portfolio of COMP4461! Check the buttons on the nav bar to check out the projects!
        </p>

      </div>
    </main>
  );
};

const styles = {
  main: {
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "20px",
  },
  image: {
    borderRadius: "50%",
    marginBottom: "20px",
  },
  name: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#333",
  },
  intro: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#555",
  },
  downloadLink: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#c0c7e2",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
};

export default Home;