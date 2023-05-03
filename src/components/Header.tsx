import styles from "./Header.module.css";
import "./Header.module.css";

const Header = (): JSX.Element => {
    return (
        <header>
            <h1><strong>Colm Murphy</strong> <br />
                <hr />
                Computer Science Student @ UCC
            </h1>
            <img id={styles.headshot} src="img/headshot.png" alt="My Headshot" />
            <ul>
                <li className={styles.who}>
                    <h3>Who am I?</h3>
                    <p>I'm a second year Computer Science student at UCC. You can contact me via LinkedIn or my personal email, both of which are linked below.</p>
                </li>
                <li className={styles.what}>
                    <h3>What do I do?</h3>
                    <p>
                        I have a keen interest in anything tech related, with an emphasis on cryptography and cybersecurity. It is a dream of mine to work in the cybersecurity 
                        field when I finish my studies.
                    </p>
                </li>
            </ul>
        </header>
    );
}

export default Header;