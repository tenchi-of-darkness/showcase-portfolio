import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export function ProjectCard(props: {
    projectName: string;
    projectDescription: string;
    projectId: string;
}) {
    return <Card className={"p-3"}>
        <CardHeader className={"px-1"}>
            <CardTitle>{props.projectName}</CardTitle>
            <CardDescription>
                {props.projectDescription}
            </CardDescription>
        </CardHeader>
        <CardFooter>
            <Button variant="project" className="w-full">
                Go to hobby
            </Button>
        </CardFooter>
    </Card>;
}