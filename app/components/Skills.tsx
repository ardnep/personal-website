import React from 'react'
import Section from './Section'
import { RuledList, RuledListItem } from './RuledList'

import { FlaskOriginal, ReactOriginal, PythonOriginal, JavaOriginal, TypescriptOriginal, COriginal, FlutterOriginal, NextjsOriginal, GitOriginal, Css3Original } from 'devicons-react'
import styles from '../ui/skills.module.css'

const Skills = () => {
    const iconColor = '#ebebeb';
    const iconSize = 40;
    return (
        <Section id='skills' title='Technologies'>
            <div className={styles.skillsMainContainer}>
                <div className={styles.skillsContainer}>
                    <RuledList>
                        <RuledListItem id={1} title='Python' icon={<PythonOriginal size={iconSize} />}></RuledListItem>
                        <RuledListItem id={5} title='Java' icon={<JavaOriginal size={iconSize} />}></RuledListItem>
                        <RuledListItem id={4} title='TypeScript' icon={<TypescriptOriginal size={iconSize} />}></RuledListItem>
                        <RuledListItem id={2} title='CSS' icon={<Css3Original size={iconSize} />}></RuledListItem>
                        <RuledListItem id={3} title='C' icon={<COriginal size={iconSize} />}></RuledListItem>
                    </RuledList>
                </div>
                <div className={styles.skillsContainer}>
                    <RuledList>
                        <RuledListItem id={1} title='Flask' icon={<FlaskOriginal size={iconSize} />}></RuledListItem>
                        <RuledListItem id={2} title='React' icon={<ReactOriginal size={iconSize} />}></RuledListItem>
                        <RuledListItem id={3} title='Flutter' icon={<FlutterOriginal size={iconSize} />}></RuledListItem>
                        <RuledListItem id={4} title='Nextjs' icon={<NextjsOriginal size={iconSize} />}></RuledListItem>
                        <RuledListItem id={5} title='Git' icon={<GitOriginal size={iconSize} />}></RuledListItem>
                    </RuledList>
                </div>
            </div>
        </Section>
    )
}

export default Skills