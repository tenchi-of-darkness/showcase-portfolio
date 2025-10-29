import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React, {Activity} from "react";
import {Button} from "@/components/ui/button";
import {ProjectDialog} from "@/components/project-dialog";
import {TagHover} from "@/components/tag-hover-card";

export enum ProjectCardVariant {
    Client = 0,
    School = 1,
    Internship = 2,
    Personal = 3
}

interface Tag {
    name: string;
    title: string;
    description: React.ReactElement | string;
    subtitle: React.ReactElement | string;
}

export interface ProjectCardProps {
    title: string;
    projectName: string;
    smallDescription: string;
    longDescription: string;
    variant: ProjectCardVariant;
    demoUrl?: string;
    gitUrl?: string;
    tags: Tag[];
}

export function ProjectCard({
                                title,
                                projectName,
                                smallDescription,
                                longDescription,
                                tags,
                                variant,
                                demoUrl,
                                gitUrl,
                            }: Readonly<ProjectCardProps>) {
    let titleString: string;

    switch (variant) {
        case ProjectCardVariant.Client:
            titleString = "Client project"
            break;
        case ProjectCardVariant.School:
            titleString = "School project"
            break;
        case ProjectCardVariant.Internship:
            titleString = "Internship project"
            break;
        case ProjectCardVariant.Personal:
            titleString = "Personal project"
            break;
        default:
            titleString = "";
    }

    return (
        <Card className={"p-0"} id={projectName}>
            <div className={"p-5"}>
                <p className={"bg-tag text-tag-foreground w-fit px-2 rounded-2xl"}>
                    {projectName}
                </p>
            </div>
            <CardHeader className={"p-3 px-4 pb-0"}>

                <CardTitle className={"text-foreground pt-0"}>
                    <p className={"mb-2"}>
                        {projectName}
                    </p>
                    <p>
                        {title}
                    </p>
                </CardTitle>
                <CardDescription className={"text-foreground pt-0"}>
                    {smallDescription}
                </CardDescription>
            </CardHeader>
            <CardFooter className={"grid grid-cols-4 gap-1 p-3 pb-2 pt-0"}>
                {tags.map((tag) => (
                    <TagHover
                        key={tag.name}
                        tag={tag.name}
                        title={tag.title}
                        description={tag.description}
                        subtitle={tag.subtitle}/>))}
            </CardFooter>
            <div className={"grid grid-cols-2 p-2 gap-5"}>
                <Activity mode={gitUrl ? "visible" : "hidden"}>
                    <Button asChild>
                        <a target={"_blank"} href={gitUrl}>Code</a>
                    </Button>
                </Activity>
                <Activity mode={demoUrl ? "visible" : "hidden"}>
                    <Button asChild>
                        <a target={"_blank"} href={demoUrl}>Demo</a>
                    </Button>
                </Activity>
                <ProjectDialog
                    projectName={projectName}
                    title={title}
                    longDescription={longDescription}
                />
            </div>
        </Card>
    )
}