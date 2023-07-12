import Nav from '../components/Nav';
import Title from '../components/Title';

import styles from '../styles/header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <Title />
            <Nav />
        </header>
    )
}