import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React, {Activity} from "react";
import {Button} from "@/components/ui/button";
import {ProjectDialog} from "@/components/project-dialog";
import {TagHover} from "@/components/tag-hover-card";

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
    demoUrl?: string;
    gitUrl?: string;
    tags: Tag[];
}

export function ProjectCard(props: Readonly<ProjectCardProps>) {

    return (
        <Card className={"p-0 flex flex-col justify-between"} id={props.projectName}>
            <div className={"p-5"}>
                <p className={"bg-tag text-tag-foreground w-fit px-2 rounded-2xl"}>
                    {props.projectName}
                </p>
            </div>
            <CardHeader className={"p-3 px-4 pb-0"}>

                <CardTitle className={"text-foreground pt-0"}>
                    <h2 className={"mb-2 text-2xl font-bold"}>
                        {props.projectName}
                    </h2>
                    <p>
                        {props.title}
                    </p>
                </CardTitle>
                <CardDescription className={"text-foreground pt-0"}>
                    {props.smallDescription}
                </CardDescription>
            </CardHeader>
            <CardFooter className={"grid grid-cols-4 gap-1 p-3 pb-2 pt-0"}>
                {props.tags.map((tag) => (
                    <TagHover
                        key={tag.name}
                        tag={tag.name}
                        title={tag.title}
                        description={tag.description}
                        subtitle={tag.subtitle}/>))}
            </CardFooter>
            <div className={"grid grid-cols-2 p-2 gap-5"}>
                <Activity mode={props.gitUrl ? "visible" : "hidden"}>
                    <Button asChild>
                        <a target={"_blank"} href={props.gitUrl}>Code</a>
                    </Button>
                </Activity>
                <Activity mode={props.demoUrl ? "visible" : "hidden"}>
                    <Button asChild>
                        <a target={"_blank"} href={props.demoUrl}>Demo</a>
                    </Button>
                </Activity>
                <ProjectDialog
                    projectName={props.projectName}
                    title={props.title}
                    longDescription={props.longDescription}
                />
            </div>
        </Card>
    )
}