import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import React, {Activity} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import type {UrlObject} from "url";

export enum ProjectCardVariant {
    Client = 0,
    School = 1,
    Internship = 2,
    Personal = 3
}

export interface ProjectCardProps {
    name: string;
    description: string;
    tags: string[];
    variant: ProjectCardVariant;
    demoUrl?: string;
    gitUrl?: string;
    readMoreUrl?: string | UrlObject
}

export function ProjectCard({
                                name,
                                description,
                                tags,
                                variant,
                                demoUrl,
                                gitUrl,
                                readMoreUrl
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
            titleString = "Hallo";
    }

    return (
        <Card className={"p-0"}>
            <div className={"p-5"}>
                <p className={"bg-tag text-tag-foreground w-fit px-2 rounded-2xl"}>
                    {titleString}
                </p>
            </div>
            <CardHeader className={"p-3 px-4 pb-0"}>
                <CardTitle className={"text-foreground pt-0"}>
                    {name}
                </CardTitle>
                <CardDescription className={"text-foreground pt-0"}>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardFooter className={"grid grid-cols-4 gap-1 p-3 pb-2 pt-0"}>
                {tags.map((tag) => (
                    <Badge className={"bg-accent text-accent-foreground w-full"} key={tag}>{tag}</Badge>))}
            </CardFooter>
            <div className={"grid grid-cols-2 p-2 gap-5"}>
                <Activity mode={gitUrl ? "visible" : "hidden"}>
                    <Button asChild>
                        <a target={"_blank"} href={gitUrl}>Code</a>
                    </Button>
                </Activity>
                <Activity mode={demoUrl ? "visible" : "hidden"}>
                    <Button asChild>
                        <a target={"_blank"}  href={demoUrl}>Demo</a>
                    </Button>
                </Activity>
            </div>
        </Card>
    )
}