import { ProjectCardButton, ProjectCardButtonProps } from "../ProjectCardButton/ProjectCardButton";
import styles from "./ProjectCard.module.css";

export type ProjectCardProps = { 
    imageUrl: string;
    title: string;
    description: string;
    bulletPoints: string[];
    actions: ProjectCardButtonProps[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({imageUrl, title, description, bulletPoints, actions}) => {
    return (
    <>
        <div className={styles.projectCard}>
            <img src={imageUrl} alt=""/>
            <h3> {description} </h3>
            <ul>
                {
                    bulletPoints.map(point => 
                        <li>
                            {point}
                        </li>
                    )
                }
            </ul>
            <ul id={styles.projectCardActions}>
            {
                actions.map(action =>
                    <li>
                        <ProjectCardButton imageUrl={action.imageUrl} title={action.title} destinationUrl={action.destinationUrl} />
                    </li>
                )
            }
            </ul>
        </div>
    </>
    )
}