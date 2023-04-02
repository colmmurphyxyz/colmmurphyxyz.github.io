import styles from "./Header.module.css";
import "./Header.module.css";

const Header = (): JSX.Element => {
    return (
        <>
            <header>
                <h1>Colm Murphy</h1>
                <h2>Computer Science student @ UCC</h2>
                <p>This is a subtitle. It will soon contain some basic information about me, in the meantime treat this is a placeholder</p>
                <img id={styles.headshot} src="img/headshot.png" alt="My Headshot" />
            </header>
        </>
    );
}

export default Header;