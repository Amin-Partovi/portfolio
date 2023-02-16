import texts from "@/texts/texts";
import React from "react";
import Article from "../article/Article";

import articles from "./articles";

import styles from "./publications.module.css";

const Publications: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{texts.PUBLICATIONS}</h1>
      <div className={styles.grid}>
        {articles.map((article) => (
          <Article
            key={article.url}
            title={article.title}
            description={article.description}
            image={article.image}
            url={article.url}
            publication={article.publication}
          />
        ))}
      </div>
    </section>
  );
};

export default Publications;
