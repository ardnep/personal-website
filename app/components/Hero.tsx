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
                <h1 className={classnames(styles.heroTitle, font.className)}>Aaradh<br />Nepal</h1>
                <Image src='/ellipse.svg' alt='ellipse' className={styles.ellipse} width='500' height='500' />
            </div>
            <div className={styles.heroContentContainer}>
                <div className={styles.contactIconsContainer}>
                    <FontAwesomeIcon className={styles.contactIcon} icon={faGithub} />
                    <FontAwesomeIcon className={styles.contactIcon} icon={faLinkedin} />
                    <FontAwesomeIcon className={styles.contactIcon} icon={faEnvelope} />
                </div>
                <p className={styles.bio}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    jkhkjhkjhjh
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
            </div>
        </section>
    );
}

export default Hero;