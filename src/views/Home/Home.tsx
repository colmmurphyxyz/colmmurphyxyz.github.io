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
                <h2>
                    Portfolio
                </h2>
            </main>
        </>
    );
};

export default Home;