"use client"

import {Card, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import React from "react";

export function HobbyCard(props: {
    hobbyName: string;
    hobbyTags: string[];
    hobbyId: string;
    hobbyIcon: string;
}) {
    return <Card className={"p-0"}>
        <CardHeader className={"p-3 px-4 pb-0"}>
            <CardTitle className={"flex flex-col items-center "}> <span className={`${props.hobbyIcon} w-30 h-30 text-secondary`}></span>{props.hobbyName}</CardTitle>
        </CardHeader>
        <CardFooter className={"grid grid-cols-4 gap-1 p-3 pb-2 pt-0"}>
            {props.hobbyTags.map((tag) => (<Badge className={"bg-accent text-accent-foreground w-full"} key={tag}>{tag}</Badge>))}
        </CardFooter>
    </Card>;
}