import Header from "../../components/Header/Header";
import { QuickLink, QuickLinkProps } from "../../components/QuickLink/QuickLink";
import styles from "./Home.module.css";
import "./Home.module.css";
import { Button, Card, CardActions, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

const Home = (): JSX.Element => {
    const quick_links: QuickLinkProps[] = [
        {   // github
            icon: "/img/github.svg",
            title: "GitHub",
            description: "Check out my open-source projects on GitHub",
            url: "https://github.com/colmmurphyxyz"
        },
        {   // LinkedIn
            icon: "img/linkedin.svg",
            title: "LinkedIn",
            description: "See what I'm up to on LinkedIn",
            url: "https://www.linkedin.com/in/colmmurphyxyz/"
        },
        {   // Email
            icon: "/img/email.svg",
            title: "Email",
            description: "Reach out to me via email",
            url: "mailto:colmmurphy016@gmail.com"
        },
        {   // CV
            icon: "/img/docs.svg",
            title: "My CV",
            description: "Download a copy of my CV",
            url: "Murphy_Colm_BscComputerScience.pdf"
        }
    ]
    return (
        <>
            <Header />
            <main>
                <div className={styles.quicklinks}>
                    <ul>
                        {quick_links.map((link) => (
                            <QuickLink {...link} />
                        ))}
                    </ul>
                </div>
                <section id={styles.portfolio}>
                    <h2>Projects I've worked on</h2>
                    <div className={styles.projectsgrid}>
                        <Card className={styles.card}>
                            <CardMedia sx={{ height: 240 }}image="./img/react.svg" title="My personal webpage" />
                            <CardContent>
                                <Typography>
                                    <h3>Personal Website</h3>
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>•</ListItemIcon>
                                        <ListItemText>Created using React, Typescript and ExpressJS</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>•</ListItemIcon>
                                        <ListItemText>Hosted on GitHub Pages</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>•</ListItemIcon>
                                        <ListItemText>Continuous Integration with GitHub Actions</ListItemText>
                                    </ListItem>
                                </List>
                            </CardContent>
                            <CardActions>
                                <Button>Share</Button>
                                <Button>See Source</Button>
                            </CardActions>
                        </Card>
                        <Card className={styles.card}>
                            <CardMedia sx={{ height: 240 }} image="./img/sandsoforisis.png" title="Sands Of Orisis" />
                            <CardContent>
                                <Typography>
                                    <h3>Sands Of Orisis</h3>
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>•</ListItemIcon>
                                        <ListItemText>2D, top-down RTS game with Godot 4</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>•</ListItemIcon>
                                        <ListItemText>Real-time multiplayer networking</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>•</ListItemIcon>
                                        <ListItemText>sick ass animations</ListItemText>
                                    </ListItem>
                                </List>
                            </CardContent>
                            <CardActions>
                                <Button>Share</Button>
                                <Button>See Source</Button>
                            </CardActions>
                        </Card>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;