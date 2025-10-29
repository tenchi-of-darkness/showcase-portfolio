import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";
import {ProjectDialog} from "@/components/project-dialog";

export enum ExperienceCardVariant {
    Work = 0,
    Education = 1,
}

export interface ExperienceCardProps {
    title: string;
    name: string;
    smallDescription: string;
    longDescription: string;
    variant: ExperienceCardVariant;
}

export function ExperienceCard({
                                   title,
                                   name,
                                   smallDescription,
                                   longDescription,
                                   variant,
                               }:
                               Readonly<ExperienceCardProps>
) {
    let titleString: string;

    switch (variant) {
        case ExperienceCardVariant.Work:
            titleString = "Work experience"
            break;
        case ExperienceCardVariant.Education:
            titleString = "Education"
            break;
        default:
            titleString = "";
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
                    <p className={"mb-2"}>
                        {name}
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
            </CardFooter>
            <div className={"flex justify-center mb-2"}>
                <ProjectDialog
                    title={title}
                    projectName={name}
                    longDescription={longDescription}
                />
            </div>
        </Card>
    )
}