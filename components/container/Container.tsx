import useScroll from "@/utils/useScroll";
import React, { useEffect } from "react";
import styles from "./container.module.css";

interface Props {
  fixedPart: JSX.Element;
  dynamicPart: JSX.Element;
}

const Container: React.FC<Props> = ({ fixedPart, dynamicPart }) => {




  return (
    <div className={styles.container}>
      <div className={styles.fixed}>{fixedPart}</div>
      <div className={styles.dynamic}>{dynamicPart}</div>
    </div>
  );
};

export default Container;
