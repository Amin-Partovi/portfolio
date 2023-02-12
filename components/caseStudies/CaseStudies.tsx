import React from "react";
import SampleWork from "../sampleWork/SampleWork";

import styles from "./case-studies.module.css";
import Chapter from "public/chapter.png";

const arr = [1, 2, 3, 4, 5];

const CaseStudies: React.FC = () => {
  return (
    <section className={styles.container}>
      {arr.map((item) => (
        <SampleWork
          key={item}
          title={"chapter pitch"}
          src={Chapter}
          description={
            "A freelancing platform. clients can interview, hire and work with freelancers and freelance agencies through the platform."
          }
        />
      ))}
    </section>
  );
};

export default CaseStudies;
