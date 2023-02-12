import Image from "next/image";

import Gmail from "public/set1-gmail.svg";
import LinkedIn from "public/set1-linkedin.svg";
import Github from "public/set1-github.svg";
import WhatsApp from "public/set1-whatsapp.svg";
import texts from "@/texts/texts";

import styles from "./social-media.module.css";

const SocialMedia: React.FC = () => {
  return (
    <div className={styles["social-media"]}>
      <Image src={Gmail} width={50} height={50} alt={texts.gmail} />
      <Image src={LinkedIn} width={50} height={50} alt={texts.linkedin} />
      <Image src={Github} width={50} height={50} alt={texts.github} />
      <Image src={WhatsApp} width={50} height={50} alt={texts.whatsapp} />
    </div>
  );
};

export default SocialMedia;
