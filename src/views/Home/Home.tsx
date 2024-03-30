import Header from "../../components/Header/Header";
import { QuickLink, QuickLinkProps } from "../../components/QuickLink/QuickLink";
import styles from "./Home.module.css";
import "./Home.module.css";

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
                    <h2>Portfolio</h2>
                    <article id={styles.personalwebsite}>
                        <h3>ReactJS website</h3>
                        <img src="img/webpage.png" />
                        <ul>
                            <li>Created using ReactJS</li>
                            <li>Hosted on GitHub Pages</li>
                            <li>Continuous Integration with GitHub Actions</li>
                        </ul>
                    </article>
                    
                </section>
            </main>
        </>
    );
};

export default Home;