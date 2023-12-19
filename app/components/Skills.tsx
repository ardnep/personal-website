import React from 'react'
import Section from './Section'
import { RuledList, RuledListItem } from './RuledList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJs, faReact, faLinux, faJava } from '@fortawesome/free-brands-svg-icons'
import styles from '../ui/skills.module.css'
import { faC } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    return (
        <Section id='skills' title='Technologies'>
            <div className={styles.skillsMainContainer}>
                <div className={styles.skillsContainer}>
                    <RuledList>
                        <RuledListItem id={1} title='Python' icon={<FontAwesomeIcon width='2rem' icon={faPython} />}></RuledListItem>
                        <RuledListItem id={5} title='Java' icon={<FontAwesomeIcon width='2rem' icon={faJava} />}></RuledListItem>
                        <RuledListItem id={6} title='C' icon={<FontAwesomeIcon width='2rem' icon={faC} />}></RuledListItem>
                        <RuledListItem id={2} title='JavaScript' icon={<FontAwesomeIcon width='2rem' icon={faJs} />}></RuledListItem>
                        <RuledListItem id={3} title='React' icon={<FontAwesomeIcon width='2rem' icon={faReact} />}></RuledListItem>
                        <RuledListItem id={4} title='Linux' icon={<FontAwesomeIcon width='2rem' icon={faLinux} />}></RuledListItem>
                    </RuledList>
                </div>
                <div className={styles.skillsContainer}>
                    <RuledList>
                        <RuledListItem id={1} title='JavaScript' icon={<FontAwesomeIcon width='2rem' icon={faJs} />}></RuledListItem>
                        <RuledListItem id={2} title='Python' icon={<FontAwesomeIcon width='2rem' icon={faPython} />}></RuledListItem>
                    </RuledList>
                </div>
            </div>
        </Section>
    )
}

export default Skills