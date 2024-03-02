import Image from "next/image";

import styles from "../ui/hero.module.css";
import { IBM_Plex_Mono } from "next/font/google";
import { FiGithub, FiMail } from "react-icons/fi";
import { RiLinkedinFill } from "react-icons/ri";

const font = IBM_Plex_Mono({ subsets: ["latin"], weight: "300" });

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div
        style={{
          paddingTop: "5%",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "3rem",
          height: "100%",
        }}
      >
        <Image src="/barcode.svg" alt="barcode" width={200} height={100} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <h1 className={font.className}>Aaradh Nepal</h1>
          <h2
            style={{
              fontWeight: 600,
              color: "rgb(var(--secondary-rgb))",
            }}
          >
            Software Engineer | Student
          </h2>
        </div>
        <div className={styles.contactIconsContainer}>
          <a href="https://github.com/ardnep" target="_blank">
            <FiGithub className={styles.contactIcon} />
          </a>
          <a href="https://www.linkedin.com/in/aaradh-nepal/" target="_blank">
            <RiLinkedinFill className={styles.contactIcon} />
          </a>
          <a href="mailto:aaradhnep@gmail.com">
            <FiMail className={styles.contactIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
