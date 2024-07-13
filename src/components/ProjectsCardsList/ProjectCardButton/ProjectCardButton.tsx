import styles from "./ProjectCardButton.module.css"

export type ProjectCardButtonProps = {
    imageUrl?: string;
    title: string;
    destinationUrl: string;
}

export const ProjectCardButton: React.FC<ProjectCardButtonProps> = ({imageUrl, title, destinationUrl}) => {
    return (
    <>
        <div className={styles.projectCardButton}>
            <a href={destinationUrl}>
                <img src={imageUrl || ""} alt={`Icon for ${title} button`}/>
                <p> {title} </p>
            </a>
        </div>
    </>
    )
}