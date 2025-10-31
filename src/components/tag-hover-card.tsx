import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {Badge} from "@/components/ui/badge";
import React from "react";

export interface HobbyCardProps {
    title: string;
    description: React.ReactElement | string;
    subtitle: React.ReactElement | string;
    tag: string;
}

export function TagHover({
                             title,
                             description,
                             subtitle,
                             tag,
                         }: Readonly<HobbyCardProps>) {
    return (
        <HoverCard openDelay={500}>
            <HoverCardTrigger asChild>
                <Badge className={"bg-accent text-accent-foreground w-full"}>{tag}</Badge>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-accent/90 backdrop-blur-xs">
                <div className="flex justify-between gap-4">
                    <div className="space-y-1">
                        <h4 className="text-m font-bold">{title}</h4>
                        <p className="text-sm">
                            {description}
                        </p>
                        <p className="text-secondary-foreground text-xs">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}