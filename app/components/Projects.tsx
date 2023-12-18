import styles from '../ui/projects.module.css'
import { ExpandableListItem, ExpandableRulingList } from './ExpandableRulingList';
import Section from './Section';

const Projects = () => {
    const projectItems: string[] = ['A', 'B'];
    return (
        <Section id='projects' title='Projects'>
            <ExpandableRulingList>
                <ExpandableListItem id={1} title='Attendance Management Application' expandedContent='hi' />
                <ExpandableListItem id={2} title='Movie Booking and Listing Management Application' expandedContent='bye' />
                <ExpandableListItem id={3} title='This Website' expandedContent='bye' />
            </ExpandableRulingList>
        </Section>
    );
}

export default Projects;