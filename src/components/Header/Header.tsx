import styles from "./Header.module.css";
import "./Header.module.css";

const Header = (): JSX.Element => {
    return (
        <header>
            <h1>
                <strong>Colm Murphy</strong> <br />
            </h1>
            <p>
                <hr />
                BSc Computer Science Student @ UCC <br /><br />
                Software Development Intern @ Pilz Ireland
            </p>
            <img id={styles.headshot} src="img/headshot.png" alt="My Headshot" />
        </header>
    );
}

export default Header;