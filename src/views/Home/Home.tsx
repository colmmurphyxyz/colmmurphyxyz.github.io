import Header from "../../components/Header/Header";
import { QuickLink, QuickLinkProps } from "../../components/QuickLink/QuickLink";
import styles from "./Home.module.css";
import "./Home.module.css";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

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
                            <QuickLink {...link} key={link.title} />
                        ))}
                    </ul>
                </div>
                <section id={styles.portfolio}>
                    <h2 style={{ textAlign: "center" }}>Projects I've worked on</h2>
                    {/* <hr /> */}

                    <Grid container className={styles.projectsGrid}>
                        <Grid item component={Card} className={styles.card} key={1} xs>
                            <CardMedia image="./img/react.svg" title="React logo" className={styles.cardMedia} />
                            <CardContent>
                                <Typography variant="h4">
                                    Personal Website
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
                            <CardActions className={styles.cardActions}>
                                <Button
                                    className={styles.cardActions}
                                    variant="contained"
                                    href="https://github.com/colmmurphyxyz/colmmurphyxyz.github.io"
                                    startIcon={<GitHubIcon />}>
                                    See Source
                                </Button>
                            </CardActions>
                        </Grid>
                        <Grid item component={Card} className={styles.card} key={2} xs>
                            <CardMedia image="./img/sandsoforisis.png" title="Sands Of Orisis" className={styles.cardMedia} />
                            <CardContent>
                                <Typography variant="h4">
                                    Sands Of Orisis
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
                                </List>
                            </CardContent>
                            <CardActions className={styles.cardActions}>
                                <Button
                                    className={styles.cardActions}
                                    variant="contained"
                                    href="https://github.com/colmmurphyxyz/CS3305-2024-Team-2"
                                    startIcon={<GitHubIcon />}>
                                    See Source
                                </Button>
                            </CardActions>
                        </Grid>
                        <Grid item component={Card} className={styles.card} key={2} xs>
                            <CardMedia image="./img/klaassify_screenshot.png" title="Klaassify" className={styles.cardMedia} />
                            <CardContent>
                                <Typography variant="h4">
                                    Klaassify
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>•</ListItemIcon>
                                        <ListItemText>JavaFX & ExpressJS application to visualise your music taste</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>•</ListItemIcon>
                                        <ListItemText>Integrates with the Spotify API to retrieve your favourite artists</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>•</ListItemIcon>
                                        <ListItemText>Represents these artists as vertices in a graph, with similar artists connected with an edge</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>•</ListItemIcon>
                                        <ListItemText>Utilises a force simulation algorithm to render the graph on a 2D canvas</ListItemText>
                                    </ListItem>
                                </List>
                            </CardContent>
                            <CardActions className={styles.cardActions}>
                                <Button
                                    className={styles.cardActions}
                                    variant="contained"
                                    href="https://github.com/benshorten72/cs3500-team36-server"
                                    startIcon={<GitHubIcon />}>
                                    Server
                                </Button>
                                <Button
                                    className={styles.cardActions}
                                    variant="contained"
                                    href="https://github.com/colmmurphyxyz/cs3500-team36-client"
                                    startIcon={<GitHubIcon />}>
                                    Client
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </section>
            </main>
        </>
    );
};

export default Home;