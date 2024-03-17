import React from "react";
import Section from "./Section";
import { ExperienceList, ExperienceItem } from "./ExperienceList";

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <ExperienceList>
        <ExperienceItem
          id={1}
          startDate="Jan 2024"
          endDate="Present"
          title="Full Stack Software Engineer"
          company="Hypotenuse AI (YC S20), Singapore"
          description="Working accross the stack (frontend, backend and DevOps) to write and maintain high quality, efficient software at a Y Combinator-backed startup that is building an AI Content Generator."
          skills={[
            "Python",
            "TypeScript",
            "React.js",
            "MUI",
            "Fastapi",
            "Docker",
            "DynamoDB",
          ]}
        />
        <ExperienceItem
          id={2}
          startDate="Sep 2022"
          endDate="Nov 2022"
          title="Computer Science Peer Tutor"
          company="Nanyang Technological University, Singapore"
          description="Conducted tutorial sessions for SC1003: Introduction to
              Computational Thinking and Programming teaching students Python
              and C programming by designing effective presentations on the
              course content and preparing practice questions of different
              levels to assess student's understanding."
          skills={["Teaching", "Presentation Skills", "Python", "C"]}
        />
        <ExperienceItem
          id={3}
          startDate="Aug 2022"
          endDate="Jun 2023"
          title="Undergraduate Linguistics Researcher"
          company="Nanyang Technological University, Singapore"
          description="Worked on a Linguistics research with the topic of Computationally
              Deciphering Ancient Writing Systems to propose a novel combined
              approach to deceipher Linear A and compare, visually and
              gramatologically, different writing systems and languages from the
              Mediterranean."
          skills={["Python", "Computational Linguistics", "Academic Research"]}
        />
        <ExperienceItem
          id={4}
          startDate="Jun 2020"
          endDate="Aug 2020"
          title="Research Intern"
          company="Tilganga Institute of Ophthalmology, Nepal"
          description="Developed a Python program using the PsychoPy library to conduct perceptual learning tasks for a psychophysics research project dealing with Cortical Visual Impairment (CVI)."
          skills={["Python", "PsychoPy"]}
        />
      </ExperienceList>
      {/* <a
        href="/files/404_resume.pdf"
        target="_blank"
        className={styles.resumeLink}
      >
        View Full Résumé
        <ArrowUpRight size="1.5rem" strokeWidth={0.8} />
      </a> */}
    </Section>
  );
};

export default Experience;
