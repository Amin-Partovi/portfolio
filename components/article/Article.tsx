import React from "react";
import Image from "next/image";
import texts from "@/texts/texts";

import styles from "./article.module.css";

interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
  publication: string;
}

const Article: React.FC<Props> = ({
  title,
  description,
  image,
  url,
  publication,
}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className={styles.container}>
        <div className={styles["image-box"]}>
          <Image
            src={image}
            alt={title}
            fill
            loader={() => image}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          {publication && (
            <span>
              {texts.PUBLISHED_BY}: {publication}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default Article;
