import styles from '../ui/projects.module.css'
import { Line, RuledAccordian, RuledAccordianList } from './RuledAccordian';
import Section from './Section';

const Projects = () => {
    return (
        <Section id='projects' title='Projects'>
            <RuledAccordianList>
                <RuledAccordian id={4} title='(Ongoing) Smart To-do Scheduler' tools={['Flask']}>Ok</RuledAccordian>
                <RuledAccordian id={3} title='This Website' link='https://github.com/ardnep/personal-website' tools={['Next.js', 'React', 'TypeScript']}>Ok</RuledAccordian>
                <RuledAccordian id={7} title='Depression Detection using Speech' tools={['PyTorch', 'librosa']}>Ok</RuledAccordian>
                <RuledAccordian id={1} title='Bluetooth Robot Controller' link='https://github.com/SC2079-Group19/AndroidApp' tools={['Android Studio', 'Java']}>
                    React is a declarative and component-based library and it handles one thing only and that is UI. React has evolved a lot. Each new addition in React is eclipsing the previous popular counter-part. Function components are more popular and encouraged than class-based components. React Context is encouraged in place of Redux to state management. Anyhow, In this story, we’ll see som
                </RuledAccordian>
                <RuledAccordian id={1} title='MyTripDiary' link='https://github.com/ardnep/SC2006-Project-No-Idea' tools={['TypeScript', 'React Native', 'Firebase', 'Maps APIs']}>
                    React is a declarative and component-based library and it handles one thing only and that is UI. React has evolved a lot. Each new addition in React is eclipsing the previous popular counter-part. Function components are more popular and encouraged than class-based components. React Context is encouraged in place of Redux to state management. Anyhow, In this story, we’ll see som
                </RuledAccordian>
                <RuledAccordian id={6} title='See-maphores' link='https://github.com/ardnep/see-maphores' tools={['OpenCV', 'YoloV5', 'Tessaract OCR']}>Ok</RuledAccordian>
                <RuledAccordian id={2} title='Movie Booking and Listing Management Application' link='https://github.com/limlincoln/SC2002-MOBLIMA-Project' tools={['Java']}>Bye</RuledAccordian>
                <RuledAccordian id={5} title='Unconventionality and Success: A Data Science Project' link='https://github.com/ardnep/ntu-sc1015-mini-project' tools={['Numpy', 'Pandas', 'Matplotlib']}>Bye</RuledAccordian>
            </RuledAccordianList>
        </Section>
    );
}

export default Projects;