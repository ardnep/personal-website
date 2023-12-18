import React from 'react'
import Section from './Section'
import { RuledList, RuledListItem } from './RuledList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJs } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
        <Section id='skills' title='Skills'>
            <RuledList>
                <RuledListItem id={1} title='JavaScript' icon={<FontAwesomeIcon width='2rem' icon={faJs} />}></RuledListItem>
                <RuledListItem id={2} title='Python' icon={<FontAwesomeIcon width='2rem' icon={faPython} />}></RuledListItem>
            </RuledList>
        </Section>
    )
}

export default Skills