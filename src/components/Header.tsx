import styles from "./Header.module.css";
import "./Header.module.css";

const Header = (): JSX.Element => {
    return (
        <header>
            <h1><strong>Colm Murphy</strong> <br />
                <hr />
                Computer Science Student @ UCC
            </h1>
            <p>I'm Colm, A Computer Science student with an interest in just about anything tech related</p>
            <ul>
                <li id="location">Cork, Ireland</li>
                <li id="email">colmmurphy016@gmail.com</li>
            </ul>
            <img id={styles.headshot} src="img/headshot.png" alt="My Headshot" />
        </header>
    );
}

export default Header;