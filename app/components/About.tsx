import React from "react";
import Section from "./Section";

import styles from "../ui/about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <Section id="about">
      <div className="flex flex-col lg:flex-row gap-8 items-center content-center">
        <Image
          src="/profile.jpeg"
          alt="profile-picture"
          width={350}
          height={350}
          className="rounded"
        />
        <div className="text-2xl">
          <p>
            I&apos;m an aspiring Software Engineer, currently pursuing a degree
            in Computer Science. I am passionate about building software that is
            efficient, scalable, and user-friendly.
          </p>
          <p>
            I genuinely enjoy learning, particularly when it involves topics
            that lie at the intersection of multiple disciplines. In my free
            time, you&apos;ll often find me tinkering with side projects and
            building fully automated workflows.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
