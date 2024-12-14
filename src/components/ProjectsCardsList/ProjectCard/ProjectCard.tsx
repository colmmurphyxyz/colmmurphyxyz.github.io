import { ProjectCardButton, ProjectCardButtonProps } from "../ProjectCardButton/ProjectCardButton";
import styles from "./ProjectCard.module.css";

export type ProjectCardProps = { 
    imageUrl: string;
    title: string;
    description: string;
    bulletPoints: string[];
    actions: ProjectCardButtonProps[];
    invertColumns?: boolean,
}

export const ProjectCard: React.FC<ProjectCardProps> = ({imageUrl, title, description, bulletPoints, actions, invertColumns}) => {
    return (
    <>
        <div className={styles.projectCard + (invertColumns ? ' ' + styles.columnsInverted : '')}>
            <img src={imageUrl} alt=""/>
            <h3> {title} </h3>
            <p> {description}</p>
            <ul id={styles.cardDescription}>
                {
                    bulletPoints.map((point, index) => 
                        <li key={index}>
                            {point}
                        </li>
                    )
                }
            </ul>
            <ul id={styles.projectCardActions}>
            {
                actions.map((action, index) =>
                    <li key={index}>
                        <ProjectCardButton key={index} imageUrl={action.imageUrl} title={action.title} destinationUrl={action.destinationUrl} />
                    </li>
                )
            }
            </ul>
        </div>
    </>
    )
}