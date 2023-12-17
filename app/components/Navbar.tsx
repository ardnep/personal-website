import Link from 'next/link';
import styles from '../ui/navbar.module.css'

interface Section {
    name: string,
    path: string,
}

const sections: Section[] = [
    { name: 'about', path: '#about' },
    { name: 'projects', path: '#projects' },
    { name: 'blog', path: '#blog' }
]

const Navbar: React.FC = () => {
    const navItems = sections.map((section) => (
        <li key={section.name}><NavItem path={section.path} name={section.name}></NavItem></li>
    ));

    return (
        <nav className={styles.navContainer}>
            <ul className={styles.navList}>{navItems}</ul>
        </nav>
    );
}

const NavItem = ({ path, name }: { path: string, name: string }) => {
    return (
        <Link className={styles.navItem} href={path}>{name}</Link>
    );
}

export default Navbar