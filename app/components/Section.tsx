import classNames from "classnames";
import { IBM_Plex_Mono } from "next/font/google";
import styles from "../ui/section.module.css";

const font = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id} className={styles.sectionContainer}>
      {title && (
        <h1 className={classNames(styles.sectionTitle, font.className)}>
          {title}
        </h1>
      )}
      {children}
    </section>
  );
};

const HeroSection = () => {
  return <></>;
};

export default Section;

