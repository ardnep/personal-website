import React from 'react';
import styles from '../ui/experiencelist.module.css';

const ExperienceItem = ({
    id,
    startDate,
    endDate,
    title,
    company,
    children
}: {
    id: number,
    startDate: string,
    endDate: string,
    title: string,
    company?: string,
    children: React.ReactNode
}) => {
    return (
        <li className={styles.listItem} key={id}>
            <div className={styles.dateContainer}>
                {startDate} - {endDate}
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.experienceTitle}>{title}</h2>
                    <div className={styles.company}>
                        {company}
                    </div>
                </div>
                <p className={styles.experienceDescription}>{children}</p>
            </div>
        </li>
    );
}

const ExperienceList = ({ children }: { children: React.ReactNode }) => {
    return (
        <ul className={styles.listContainer}>{children}</ul>
    );
}

export { ExperienceList, ExperienceItem };