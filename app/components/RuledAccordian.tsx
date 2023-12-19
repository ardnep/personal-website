'use client';

import classNames from 'classnames';
import styles from '../ui/rulinglist.module.css'
import { ArrowUpRight, Minus, Plus } from 'react-feather'
import React, { useState } from 'react';


const Line = ({ className }: { className?: string }) => {
    return (
        <hr className={classNames(styles.line, className)}></hr>
    );
}

const RuledAccordian = (
    {
        id,
        title,
        link,
        tools,
        children
    }: {
        id: number,
        title: string,
        link?: string,
        tools?: string[],
        children?: string
    }
) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <li key={id} className={styles.listItem} onClick={() => setOpen(!isOpen)}>
                <div className={styles.listItemHeadingContainer}>
                    <div className={styles.listItemHeadingContent}>
                        {
                            isOpen ? <span><Minus size='3rem' strokeWidth={0.8} /></span> :
                                <span><Plus size='3rem' strokeWidth={0.8} /></span>
                        }
                        <div className={styles.titleToolsContainer}>
                            <h2>{title}</h2>
                            <ul className={styles.toolsList}>
                                {tools?.map((tool, index) => (
                                    <>
                                        <li key={index}>{tool}</li>
                                        {index !== tools.length - 1 && <span>&bull;</span>}
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.listItemHeadingContent}>
                        {
                            link && <a href={link} target='_blank'><ArrowUpRight size='3rem' strokeWidth={0.8} /></a>
                        }
                    </div>
                </div>
                {
                    isOpen &&
                    <div className={styles.listItemExpandedContent}>
                        <p>{children}</p>
                    </div>
                }
            </li>
        </>
    );
}

const RuledAccordianList = (
    {
        width,
        children
    }: {
        width?: string,
        children: React.ReactNode[]
    }
) => {
    return (
        <div>
            <Line />
            <ul className={styles.listContainer}>
                {children.map((item) => (
                    <>
                        {item}
                        <Line />
                    </>
                ))}
            </ul>
        </div>
    );
}

export { Line, RuledAccordian, RuledAccordianList };