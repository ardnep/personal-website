import React from 'react';
import Section from './Section';

import styles from '../ui/about.module.css'

const About = () => {
    return (
        <Section id='about'>
            <div className={styles.bio}>
                I&apos;m a Computer Science student at NTU Singapore passionate about learning new things.
                I enjoy conversations about free and open source software, and working at the intersection of multiple disciplines.
            </div>
        </Section>
    );
}

export default About;