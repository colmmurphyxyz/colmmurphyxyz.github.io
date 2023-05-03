import styles from "./Header.module.css";
import "./Header.module.css";

const Header = (): JSX.Element => {
    return (
        <header>
            <h1><strong>Colm Murphy</strong> <br />
                <hr />
                Computer Science Student @ UCC
            </h1>
            <p>I'm Colm, A Computer Science student from Cork with an interest in just about anything tech related. I have a number of projects over on my Github profile 
                and I am always working on more.
            </p>
            <img id={styles.headshot} src="img/headshot.png" alt="My Headshot" />
        </header>
    );
}

export default Header;