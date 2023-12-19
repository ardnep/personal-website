import styles from '../ui/projects.module.css'
import { Line, RuledAccordian, RuledAccordianList } from './RuledAccordian';
import Section from './Section';

const Projects = () => {
    return (
        <Section id='projects' title='Projects'>
            <RuledAccordianList>
                <RuledAccordian id={1} title='Attendance Management Application' link='https://www.google.com' tools={['C', 'Python', 'Keras']}>
                    React is a declarative and component-based library and it handles one thing only and that is UI. React has evolved a lot. Each new addition in React is eclipsing the previous popular counter-part. Function components are more popular and encouraged than class-based components. React Context is encouraged in place of Redux to state management. Anyhow, In this story, we’ll see som
                </RuledAccordian>
                <RuledAccordian id={2} title='Movie Booking and Listing Management Application'>Bye</RuledAccordian>
                <RuledAccordian id={3} title='This Website'>Ok</RuledAccordian>
            </RuledAccordianList>
        </Section>
    );
}

export default Projects;