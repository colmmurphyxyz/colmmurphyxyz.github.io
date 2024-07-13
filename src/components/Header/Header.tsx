import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import "./Header.module.css";

const Header = (): JSX.Element => {

    const [headshotUrl, setHeadshotUrl] = useState("/img/headshot_placeholder.svg")

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch("/img/headshot.png");
                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);
                setHeadshotUrl(imageUrl);
            } catch(error) {
                console.error(`Error fetching headshot ${error}`)
            }
        }

        fetchImage();
    }, []);

    return (
        <header>
            <h1>
                <strong>Colm Murphy</strong> <br />
            </h1>
            <p>
                {/* <hr /> */}
                BSc Computer Science Student @ UCC <br /><br />
                Software Development Intern @ Pilz Ireland
            </p>
            <img id={styles.headshot} src={headshotUrl} alt="My Headshot" />
        </header>
    );
}

export default Header;