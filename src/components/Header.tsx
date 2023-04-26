import styles from "./Header.module.css";
import "./Header.module.css";

const Header = (): JSX.Element => {
    return (
        <>
            <header>
                <h1><strong>Colm Murphy</strong> <br />
                    <hr />
                    Computer Science Student @ UCC
                </h1>
                <p>This is a subtitle. It will soon contain some basic information about me, in the meantime treat this is a placeholder</p>
                <img id={styles.headshot} src="img/headshot.png" alt="My Headshot" />
            </header>
        </>
    );
}

export default Header;