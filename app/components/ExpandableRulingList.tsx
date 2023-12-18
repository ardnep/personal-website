import classNames from 'classnames';
import styles from '../ui/rulinglist.module.css'
import { ArrowUpRight, Plus } from 'react-feather'


const Line = ({ className }: { className?: string }) => {
    return (
        <hr className={classNames(styles.line, className)}></hr>
    );
}

const ExpandableListItem = (
    {
        id,
        title,
        expandedContent
    }: {
        id: number,
        title: string,
        expandedContent: string
    }
) => {
    return (
        <>
            <li key={id} className={styles.listItem}>
                <div className={styles.listItemLeftContent}>
                    <Plus size='3rem' strokeWidth={0.8} />{title}
                </div>
                <div className={styles.listItemRightContent}>
                    <ArrowUpRight size='3rem' strokeWidth={0.8} />
                </div>
            </li>
        </>
    );
}

const ExpandableRulingList = (
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
                {children.map((item, index) => (
                    <>
                        {item}
                        <Line />
                    </>
                ))}
            </ul>
        </div>
    );
}

export { ExpandableRulingList, ExpandableListItem };