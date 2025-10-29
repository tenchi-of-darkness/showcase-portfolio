import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Icon} from "@iconify/react";
import {cn} from "@/lib/utils";
import React, {ComponentProps} from "react";
import {TagHover} from "@/components/tag-hover-card";

interface Tag {
    name: string;
    title: string;
    description: React.ReactElement | string;
    subtitle?: React.ReactElement | string;
    projectNames?: string[];
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
                          }: Readonly<SkillCardProps>) {
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
                {tags.map((tag, i) => {
                    let subtitle = <></>
                    if (tag.projectNames) {
                        const projectAnchors = tag.projectNames.map((projectName, j) => {
                            return <span key={j}>
                                {j !== 0 ? ", " : undefined}
                                <a key={projectName} href={"/#" + projectName}>{projectName}</a>
                            </span>
                        })
                        subtitle = <>Used in {projectAnchors}</>
                    } else {
                        subtitle = <>{tag.subtitle}</>;
                    }
                    return (
                        <TagHover
                            key={i}
                            tag={tag.name}
                            title={tag.title}
                            description={tag.description}
                            subtitle={subtitle}/>);
                })}
            </CardFooter>
        </Card>
    );
}