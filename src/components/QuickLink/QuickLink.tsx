import "./QuickLink.module.css";
import styles from "./QuickLink.module.css";;


export type QuickLinkProps = { 
    icon?: string;
    title: string;
    description: string;
    url: string;
}

export const QuickLink: React.FC<QuickLinkProps> = ({ icon, title, description, url }) => {
    return (
        <li key={title} className={styles.quicklink}>
            <a href={url}>
                <div className={styles.quicklinkheader}>
                    <img src={icon || `https://${new URL(url).hostname}/favicon.ico`} alt={title} />
                    <h3>{title}</h3>
                </div>
                <p>{description}</p>
            </a>
        </li>
    )
};