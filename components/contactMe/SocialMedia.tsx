import { toast } from "react-toastify";

import Gmail from "public/social/gmail.svg";
import LinkedIn from "public/social/linkedin.svg";
import Github from "public/social/github.svg";
import WhatsApp from "public/social/whatsapp.svg";
import texts from "@/texts/texts";
import SocialMediaIcon from "./SocialMediaIcon";

import styles from "./social-media.module.css";

const LINKEDIN = "https://www.linkedin.com/in/amin-partovi-823393b2/";
const GITHUB = "https://github.com/Amin-Partovi";
const GMAIL = "amin.frontend@gmail.com";
const WHATS_APP = "+989353200380";

const SocialMedia: React.FC = () => {
  function handleClickGmail() {
    navigator.clipboard.writeText(GMAIL);
    toast("🔥 now, you have my Gmail address in your clipboard", {
      className: styles.toast,
    });
  }

  function handleClickWhatsApp() {
    navigator.clipboard.writeText(WHATS_APP);
    toast("🔥 now, you have my phone number in your clipboard", {
      className: styles.toast,
    });
  }
  return (
    <div className={styles["social-media"]}>
      <SocialMediaIcon
        icon={Gmail}
        title={texts.GMAIL}
        onClick={handleClickGmail}
      />

      <a href={LINKEDIN} target="_blank" rel="noreferrer">
        <SocialMediaIcon icon={LinkedIn} title={texts.LINKEDIN} />
      </a>

      <a href={GITHUB} target="_blank" rel="noreferrer">
        <SocialMediaIcon icon={Github} title={texts.GITHUB} />
      </a>

      <SocialMediaIcon
        icon={WhatsApp}
        title={texts.WHATSAPP}
        onClick={handleClickWhatsApp}
      />
    </div>
  );
};

export default SocialMedia;
