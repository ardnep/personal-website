import classNames from 'classnames';
import styles from '../ui/rulinglist.module.css'

const Line = ({ className }: { className?: string }) => {
    return (
        <hr className={classNames(styles.line, className)}></hr>
    );
}

const RuledListItem = (
    {
        id,
        title,
        icon
    }: {
        id: number,
        title: string,
        icon?: React.ReactNode
    }
) => {
    return (
        <>
            <li key={id} className={styles.listItem}>
                <div className={styles.listItemHeadingContainer}>
                    <div className={styles.listItemHeadingContent}>
                        <span className={styles.leftIcon}>{icon}</span>
                        <div className='break-all'>
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}

const RuledList = (
    {
        width,
        children
    }: {
        width?: string,
        children: React.ReactNode[]
    }
) => {
    return (
        <div className={styles.mainWrapper}>
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

export { RuledList, RuledListItem };