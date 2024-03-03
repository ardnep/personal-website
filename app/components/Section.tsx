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
    <section
      id={id}
      className="flex flex-col content-start pt-[calc(var(--navbar-height)+5%)] pb-[calc(var(--navbar-height)+5%)]"
    >
      {title && (
        <h2 className={classNames("md:text-5xl text-4xl mb-8", font.className)}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;

