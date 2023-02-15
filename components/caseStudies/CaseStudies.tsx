import React from "react";

import SampleWork from "../sampleWork/SampleWork";
import projects from "./projects";
import texts from "@/texts/texts";

import styles from "./case-studies.module.css";

const CaseStudies: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{texts.CASES}</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <SampleWork
            key={project.id}
            title={project.title}
            src={project.photo}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
