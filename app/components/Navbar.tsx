'use client';

import { Menu, X } from 'react-feather'

import styles from '../ui/navbar.module.css'
import { useState } from 'react';

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

    const [isOpen, setOpen] = useState(false);

    return (
        <nav className={styles.navContainer}>
            <div className={styles.navBurgerContainer}>
                <button className={styles.navBurger} onClick={() => setOpen(!isOpen)}>
                    {!isOpen ? <Menu size='2rem' strokeWidth={0.8}></Menu> :
                        <X size='2rem' strokeWidth={0.8}></X>
                    }
                </button>
                {isOpen && <ul className={styles.navBurgerList}>{navItems}</ul>}
            </div>
            <ul className={styles.navList}>{navItems}</ul>
        </nav>
    );
}

const NavItem = ({ path, name }: { path: string, name: string }) => {
    return (
        <a className={styles.navItem} href={path}>{name}</a>
    );
}

export default Navbar