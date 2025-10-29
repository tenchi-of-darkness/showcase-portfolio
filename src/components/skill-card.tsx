import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Icon} from "@iconify/react";
import {cn} from "@/lib/utils";
import React, {ComponentProps} from "react";
import {TagHover} from "@/components/tag-hover-card";

interface Tag {
    name: string;
    title: string;
    description: React.ReactElement | string;
    subtitle: React.ReactElement | string;
}

export interface SkillCardProps {
    name: string;
    description: string;
    tags: Tag[];
    iconProps: ComponentProps<typeof Icon>;

}

export function SkillCard({
                              iconProps: {className: iconClassName, width, height, ...otherIconProps},
                              name,
                              description,
                              tags,
                          }: SkillCardProps) {
    return (
        <Card className={"p-0"}>
            <CardHeader className={"p-3 px-4 pb-0"}>
                <CardTitle className={"flex flex-col items-start text-3xl font-bold"}>
                    <Icon className={cn("text-secondary stroke-2 self-end", iconClassName)}
                          width={width ?? "7.5rem"}
                          height={height ?? "7.5rem"}
                          {...otherIconProps} />
                    {name}
                </CardTitle>
                <CardDescription className={"text-foreground pt-0"}>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardFooter className={"grid grid-cols-4 gap-1 p-3 pb-2 pt-0"}>
                {tags.map((tag) => (
                    <TagHover
                        key={tag.name}
                        tag={tag.name}
                        title={tag.title}
                        description={tag.description}
                        subtitle={<a href={"/#Chroma"}>{tag.subtitle}</a>}/>))}
            </CardFooter>
        </Card>
    );
}