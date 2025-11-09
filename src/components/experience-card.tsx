import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";
import {ProjectDescriptionDialog} from "@/components/project-description-dialog";

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
            <CardHeader className={"p-3 px-4 pb-0"}>
                <div className={"pt-3"}>
                    <p className={"bg-tag text-tag-foreground w-fit px-2 rounded-2xl"}>
                        {titleString}
                    </p>
                </div>
                <CardTitle className={"text-foreground"}>
                    <p className={"mb-2"}>
                        {name}
                    </p>
                    <p>
                        {title}
                    </p>
                </CardTitle>
                <CardDescription className={"text-foreground"}>
                    {smallDescription}
                </CardDescription>
            </CardHeader>
            <CardFooter className={"flex justify-center sm:justify-start mb-2"}>
                <ProjectDescriptionDialog
                    title={title}
                    projectName={name}
                    longDescription={longDescription}
                />
            </CardFooter>

        </Card>
    )
}