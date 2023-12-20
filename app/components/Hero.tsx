import classnames from 'classnames';
import { DM_Serif_Display } from 'next/font/google'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import styles from '../ui/hero.module.css'
import Image from 'next/image';

const font = DM_Serif_Display({ subsets: ['latin'], weight: '400' })

const Hero: React.FC = () => {
    return (
        <section id="home" className={styles.heroContainer}>
            <div className={styles.heroTitleContainer}>
                <h1 className={classnames(styles.heroTitle, font.className)}>Aaradh Nepal</h1>
                <Image src='/blob.svg' alt='ellipse' className={styles.ellipse} width='500' height='500' />
            </div>
            <div className={styles.heroContentContainer}>
                <div className={styles.contactIconsContainer}>
                    <a href='https://github.com/ardnep' target='_blank'><FontAwesomeIcon className={styles.contactIcon} icon={faGithub} /></a>
                    <a href='https://www.linkedin.com/in/aaradh-nepal/' target='_blank'><FontAwesomeIcon className={styles.contactIcon} icon={faLinkedin} /></a>
                    <a href='mailto:aaradhnep@gmail.com'><FontAwesomeIcon className={styles.contactIcon} icon={faEnvelope} /></a>
                </div>
            </div>
        </section>
    );
}

export default Hero;