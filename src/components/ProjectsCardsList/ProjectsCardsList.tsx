import { ProjectCard, ProjectCardProps } from "./ProjectCard/ProjectCard";

const ProjectsCardsList = (): JSX.Element => {
    const cards: ProjectCardProps[] = [
        {
            imageUrl: "/img/sandsoforisis.png",
            title: "Sands of Orisis",
            description: "Lorem Ipsum",
            bulletPoints: ["Dolor", "sit Amet"],
            actions: [
                {
                    imageUrl: "/img/github.svg",
                    title: "See Source",
                    destinationUrl: "https://github.com"
                },
                {
                    imageUrl: "/img/github.svg",
                    title: "See Source",
                    destinationUrl: "https://github.com"
                }
            ]
        }
    ]
    return (
        <>
        <section>
            <h2>Projects I've Worked On</h2>
            {
                cards.map(card =>
                    <ProjectCard
                        imageUrl={card.imageUrl}
                        title={card.title}
                        description={card.description}
                        bulletPoints={card.bulletPoints}
                        actions={card.actions}
                    />
                )
            }
        </section>
        </>
    )
}

export default ProjectsCardsList;