import styles from "./Header.module.css";
import "./Header.module.css";

const Header = (): JSX.Element => {
    return (
        <header>
            <h1><strong>Colm Murphy</strong> <br />
                <hr />
                BSc Computer Science Student @ UCC
            </h1>
            <img id={styles.headshot} src="img/headshot.png" alt="My Headshot" />
            <ul>
                <li className={styles.who}>
                    <h3>Who am I?</h3>
                    <p>I'm a third year Computer Science student at UCC. You can contact me via LinkedIn or my personal email, both of which are linked below.</p>
                </li>
                <li className={styles.what}>
                    <h3>What do I do?</h3>
                    <p>
                        I have a keen interest in anything tech related, I am experienced in web development, cybersecurity and cryptography and have a number of personal
                         projects and internships that demonstrate my skills.
                    </p>
                </li>
                <li className={styles.hireMe}>
                    <p>
                        I am currently searching for an internship oppurtunity from March to September 2024. I am an self-motivated individual interested in
                         working in any field of tech.
                    </p>
                </li>
            </ul>
        </header>
    );
}

export default Header;