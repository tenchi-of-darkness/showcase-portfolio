import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import React from "react";
export enum ExperienceCardVariant {
    Work = 0,
    Education = 1,
}

export interface ExperienceCardProps {
    name: string;
    description: string;
    tags: string[];
    variant: ExperienceCardVariant;
}

export function ExperienceCard({
                                name,
                                description,
                                tags,
                                variant,
                            }: Readonly<ExperienceCardProps>) {
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
            </div>
        </Card>
    )
}