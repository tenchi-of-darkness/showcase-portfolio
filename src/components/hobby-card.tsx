"use client"

import {Card, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import React, {ComponentProps} from "react";

import {Icon} from "@iconify/react";
import {cn} from "@/lib/utils";
import {HobbyTagHoverCard} from "@/components/tag-hover-card";

interface Tag {
    name: string;
    title: string;
    description: React.ReactElement | string;
    subtitle: React.ReactElement | string;
}

interface HobbyCardProps {
    name: string;
    tags: Tag[];
    id: string;
    iconProps: ComponentProps<typeof Icon>;
}

export function HobbyCard({
                              iconProps: {className: iconClassName, width, height, ...otherIconProps},
                              name,
                              tags
                          }: Readonly<HobbyCardProps>) {
    return <Card className={"p-0"}>
        <CardHeader className={"p-3 px-4 pb-0"}>
            <CardTitle className={"flex flex-col items-center"}>
                <Icon className={cn("text-secondary stroke-2", iconClassName)} width={width ?? "7.5rem"}
                      height={height ?? "7.5rem"} {...otherIconProps} />
                {name}
            </CardTitle>
        </CardHeader>
        <CardFooter className={"grid grid-cols-4 gap-1 p-3 pb-2 pt-0"}>
            {tags.map((tag) => (
                <HobbyTagHoverCard
                    key={tag.name}
                    tag={tag.name}
                    title={tag.title}
                    description={tag.description}
                    subtitle={tag.subtitle}/>))}
        </CardFooter>
    </Card>;
}