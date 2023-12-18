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
        children
    }: {
        id: number,
        title: string,
        children: string
    }
) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <li key={id} className={styles.listItem} onClick={() => setOpen(!isOpen)}>
                <div className={styles.itemHeadingContainer}>
                    <div className={styles.listItemLeftContent}>
                        {
                            isOpen ? <Minus size='3rem' strokeWidth={0.8} /> :
                                <Plus size='3rem' strokeWidth={0.8} />
                        }
                        {title}
                    </div>
                    <div className={styles.listItemRightContent}>
                        <ArrowUpRight size='3rem' strokeWidth={0.8} />
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