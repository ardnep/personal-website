import React from 'react'
import Section from './Section'
import { RuledList, RuledListItem } from './RuledList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJs } from '@fortawesome/free-brands-svg-icons'
import styles from '../ui/skills.module.css'

const Skills = () => {
    return (
        <Section id='skills' title='Skills'>
            <div className={styles.skillsMainContainer}>
                <div className={styles.skillsContainer}>
                    <RuledList>
                        <RuledListItem id={1} title='JavaScriptJavaScriptJavaScriptJavaScript' icon={<FontAwesomeIcon width='2rem' icon={faJs} />}></RuledListItem>
                        <RuledListItem id={2} title='Python' icon={<FontAwesomeIcon width='2rem' icon={faPython} />}></RuledListItem>
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