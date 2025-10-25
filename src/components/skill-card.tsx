"use client"

import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Icon} from "@iconify/react";
import {cn} from "@/lib/utils";
import React, {ComponentProps} from "react";

export interface SkillCardProps {
    name: string;
    description: string;
    tags: string[];
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
                    <Badge className={"bg-accent text-accent-foreground w-full"} key={tag}>{tag}</Badge>))}
            </CardFooter>
        </Card>
    );
}