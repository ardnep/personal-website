import classNames from 'classnames';
import { DM_Serif_Display } from 'next/font/google';
import styles from '../ui/section.module.css'

const font = DM_Serif_Display({ subsets: ['latin'], weight: '400' })

const Section = (
    { id, title, children }:
        { id: string, title: string, children: React.ReactNode }
) => {
    return (
        <section id={id} className={classNames(styles.sectionContainer, font.className)}>
            <h1 className={styles.sectionTitle}>{title}</h1>
            {children}
        </section>
    );
}

const HeroSection = () => {
    return (
        <></>
    );
}

export default Section;