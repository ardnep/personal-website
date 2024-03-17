import React from "react";
import Section from "./Section";

import { FaGitAlt, FaJava, FaPython, FaReact } from "react-icons/fa";
import {
  SiFastapi,
  SiFlask,
  SiTypescript,
  SiNextdotjs,
  SiC,
} from "react-icons/si";

import classes from "../ui/skills.module.css";

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-3 gap-px bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_0,rgba(255,255,255,0)_100%)]">
        <div className={classes.techCard}>
          <SiNextdotjs className="md:text-5xl text-3xl"></SiNextdotjs>
          <p>Next.js</p>
        </div>
        <div className={classes.techCard}>
          <SiFlask className="md:text-5xl text-3xl"></SiFlask>
          <p>Flask</p>
        </div>
        <div className={classes.techCard}>
          <SiTypescript className="md:text-5xl text-3xl"></SiTypescript>
          <p>TypeScript</p>
        </div>
        <div className={classes.techCard}>
          <FaReact className="md:text-5xl text-3xl"></FaReact>
          <p>React.js</p>
        </div>
        <div className={classes.techCard}>
          <FaPython className="md:text-5xl text-3xl"></FaPython>
          <p>Python</p>
        </div>
        <div className={classes.techCard}>
          <FaGitAlt className="md:text-5xl text-3xl"></FaGitAlt>
          <p>Git</p>
        </div>
        <div className={classes.techCard}>
          <FaJava className="md:text-5xl text-3xl"></FaJava>
          <p>Java</p>
        </div>
        <div className={classes.techCard}>
          <SiFastapi className="md:text-5xl text-3xl"></SiFastapi>
          <p>Fastapi</p>
        </div>
        <div className={classes.techCard}>
          <SiC className="md:text-5xl text-3xl"></SiC>
          <p>C</p>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
