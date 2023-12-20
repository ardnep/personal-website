import React from 'react'
import Section from './Section'
import { ExperienceList, ExperienceItem } from './ExperienceList'
import { ArrowUpRight } from 'react-feather'
import styles from '../ui/experience.module.css'

const Experience = () => {
    return (
        <Section id='about' title='Experience'>
            <div className={styles.sectionWrapper}>
                <div className={styles.experienceListContainer}>
                    <ExperienceList>
                        <ExperienceItem id={1} startDate='Jan 2024' endDate='Present' title='Full Stack Software Engineer Intern' company='Hypotenuse AI (YC S20), Singapore'>
                            Will be working accross the stack (frontend, backend and DevOps) to write and maintain high quality efficient software at a Y Combinator-backed startup that is
                            building an AI Content Generator.
                        </ExperienceItem>
                        <ExperienceItem id={2} startDate='Sep 2022' endDate='Nov 2022' title='Computer Science Peer Tutor' company='Nanyang Technological University, Singapore'>
                            Conducted tutorial sessions for SC1003: Introduction to Computational Thinking and Programming teaching students Python and C programming
                            by designing effective presentations on the course content and preparing practice questions of different levels to assess student&apos;s
                            understanding.
                        </ExperienceItem>
                        <ExperienceItem id={3} startDate='Aug 2023' endDate='Jun 2023' title='Undergraduate Linguistics Researcher' company='Nanyang Technological University, Singapore'>
                            Worked on a Linguistics research with the topic of Computationally Deciphering Ancient Writing Systems to propose a novel combined approach
                            to deceipher Linear A and compare, visually and gramatologically, different writing systems and languages from the Mediterranean.
                        </ExperienceItem>
                    </ExperienceList>
                    <a href='#' className={styles.resumeLink}>
                        View Full Résumé
                        <ArrowUpRight size='1.5rem' strokeWidth={0.8} />
                    </a>
                </div>
            </div>
        </Section>
    )
}

export default Experience