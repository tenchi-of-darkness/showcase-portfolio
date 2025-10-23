"use client"

import {Card, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export function HobbyCard(props: {
    hobbyName: string;
    hobbyTags: [];
    hobbyId: string;
}) {
    return <Card className={"p-3"}>
        <CardHeader className={"px-1"}>
            <CardTitle>{props.hobbyName}</CardTitle>
        </CardHeader>
        <CardFooter>
            <Button variant={"project"} onClick={() => {}} className="w-full">
                Go to project
            </Button>
        </CardFooter>
    </Card>;
}