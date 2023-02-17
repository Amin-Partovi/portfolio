import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./social-media-icon.module.css";

interface Props {
  icon: string;
  title: string;
  onClick?: () => void;
}

const variants = {
  initial: {
    opacity: 0.4,
  },
  hover: {
    opacity: 1,
    scale: 1.2,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
};

const SocialMediaIcon: React.FC<Props> = ({ icon, title, onClick }) => {
  return (
    <motion.div
      variants={variants}
      initial={variants.initial}
      whileHover={variants.hover}
      onClick={onClick}
      className={styles["image-box"]}
    >
      <Image src={icon} width={40} height={40} alt={title} priority />
    </motion.div>
  );
};

export default SocialMediaIcon;
