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
      <Image src={Gmail} width={50} height={50} alt={texts.GMAIL} />
      <Image src={LinkedIn} width={50} height={50} alt={texts.LINKEDIN} />
      <Image src={Github} width={50} height={50} alt={texts.GITHUB} />
      <Image src={WhatsApp} width={50} height={50} alt={texts.WHATSAPP} />
    </div>
  );
};

export default SocialMedia;
