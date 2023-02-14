import React from "react";
import SampleWork from "../sampleWork/SampleWork";

import projects from "./projects";

import styles from "./case-studies.module.css";

const CaseStudies: React.FC = () => {
  return (
    <section className={styles.container}>
      {projects.map((project) => (
        <SampleWork
          key={project.id}
          title={project.title}
          src={project.photo}
          description={project.description}
        />
      ))}
    </section>
  );
};

export default CaseStudies;
