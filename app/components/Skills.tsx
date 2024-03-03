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
    <Section id="skills" title="Technologies">
      <div className="grid grid-cols-3 gap-px bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_0,rgba(255,255,255,0)_100%)]">
        <div className={classes.techCard}>
          <FaPython className={classes.icon} size="3em"></FaPython>
          <p>Python</p>
        </div>
        <div className={classes.techCard}>
          <SiFlask className={classes.icon} size="3em"></SiFlask>
          <p>Flask</p>
        </div>
        <div className={classes.techCard}>
          <SiTypescript className={classes.icon} size="3rem"></SiTypescript>
          <p>TypeScript</p>
        </div>
        <div className={classes.techCard}>
          <FaReact className={classes.icon} size="3rem"></FaReact>
          <p>React.js</p>
        </div>
        <div className={classes.techCard}>
          <SiNextdotjs className={classes.icon} size="3rem"></SiNextdotjs>
          <p>Next.js</p>
        </div>
        <div className={classes.techCard}>
          <FaGitAlt className={classes.icon} size="3rem"></FaGitAlt>
          <p>Git</p>
        </div>
        <div className={classes.techCard}>
          <FaJava className={classes.icon} size="3rem"></FaJava>
          <p>Java</p>
        </div>
        <div className={classes.techCard}>
          <SiFastapi className={classes.icon} size="3rem"></SiFastapi>
          <p>Fastapi</p>
        </div>
        <div className={classes.techCard}>
          <SiC className={classes.icon} size="3rem"></SiC>
          <p>C</p>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
