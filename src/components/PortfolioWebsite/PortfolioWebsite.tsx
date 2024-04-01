import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import styles from "./PortfolioWebsite.module.css";
import "./PortfolioWebsite.module.css";
import { Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const PortfolioWebsite: React.FC = () => {

    const [inDoomMode, setInDoomMode] = useState(false);

    const WebsiteInfo: React.FC = () => {
        return (
            <>
                <ul>
                    <li>Created using React, Express and Typescript</li>
                    <li>Hosted on GitHub Pages</li>
                    <li>Continuous Integration with GitHub Actions</li>
                    <li> <br /> </li>
                    <li>Typescript</li>
                    <li>React</li>
                    <li>Express</li>
                    <li>GitHub Actions / CI</li>
                </ul>
                {/* <button onClick={() => setInDoomMode(true)}>Enter Doom Mode</button> */}
            </>
        );
    };

    const DoomInstructions: React.FC = () => {
        return (
            <>
                <h4>Controls</h4>
                <ul>
                    <li>These are the controls</li>
                    <li>uhhhh</li>
                </ul>
            </>
        );
    };

    return (
        <article className={styles.portfoliowebsite}>
            <h3>ReactJS Website</h3>
            <div className={styles.canvascontainer}>
                <img src="/img/webpage.png" alt="A screenshot of my web page" />
            </div>
            {inDoomMode ? <DoomInstructions /> : <WebsiteInfo />}
        </article>
    );
}

export default PortfolioWebsite;