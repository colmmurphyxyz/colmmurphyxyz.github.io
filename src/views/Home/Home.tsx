import styles from "./Home.module.css";
import "./Home.module.css";

const Home = (): JSX.Element => {
    return (
        <main>
            <div className={styles.quicklinks} >
                <ul>
                    {quick_links.map((link) => (
                    <li key={link.title}>
                        <a href={link.url} target="_blank">
                        <div className={styles.quicklinkheader}>
                            <img src={link.icon ? link.icon : `https://${new URL(link.url).hostname}/favicon.ico`} alt={link.title} />
                            <h3>{link.title}</h3>
                        </div>
                        <p>{link.description}</p>
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

const quick_links: { icon?: string, title: string, description: string, url: string }[] = [
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
        url: "https://colmmurphyxyz/colm_murphy_cv.pdf"
    }
]

export default Home;