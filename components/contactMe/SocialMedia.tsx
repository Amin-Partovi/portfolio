import Image from "next/image";

import Gmail from "public/social/gmail.svg";
import LinkedIn from "public/social/linkedin.svg";
import Github from "public/social/github.svg";
import WhatsApp from "public/social/whatsapp.svg";
import texts from "@/texts/texts";

import styles from "./social-media.module.css";
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMedia: React.FC = () => {
  return (
    <div className={styles["social-media"]}>
      <SocialMediaIcon icon={Gmail} title={texts.GMAIL} />
      <SocialMediaIcon icon={LinkedIn} title={texts.LINKEDIN} />
      <SocialMediaIcon icon={Github} title={texts.GITHUB} />
      <SocialMediaIcon icon={WhatsApp} title={texts.WHATSAPP} />
    </div>
  );
};

export default SocialMedia;
