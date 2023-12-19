import React from 'react'
import Section from './Section'
import { ExperienceList, ExperienceItem } from './ExperienceList'
import { ArrowRight } from 'react-feather'
import styles from '../ui/experience.module.css'

const Experience = () => {
    return (
        <Section id='about' title='Experience'>
            <div className={styles.sectionWrapper}>
                <div className={styles.experienceListContainer}>
                    <ExperienceList>
                        <ExperienceItem id={1} startDate='2019' endDate='Present' title='Full Stack Software Engineer' company='Google'>
                            I'm new to Greensock and i have been playing a little with the plugin, especially the MorphSVG plugin. For my current project i'm using Greensock to animate some elements on the site but i'm also trying to achieve animated icons.
                        </ExperienceItem>
                        <ExperienceItem id={2} startDate='2019' endDate='Present' title='Art Director' company='Apple'>
                            I'm new to Greensock and i have been playing a little with the plugin, especially the MorphSVG plugin. For my current project i'm using Greensock to animate some elements on the site but i'm also trying to achieve animated icons.
                        </ExperienceItem>
                    </ExperienceList>
                    <a href='#' className={styles.resumeLink}>
                        Résumé
                        <ArrowRight size='1.5rem' strokeWidth={0.8} />
                    </a>
                </div>
            </div>
        </Section>
    )
}

export default Experience