import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React from "react";
import {Button} from "@/components/ui/button";

export interface ProjectDescriptionDialogProps {
    title: string;
    projectName: string;
    longDescription: string;
}

export function ProjectDescriptionDialog({
                                  title,
                                  projectName,
                                  longDescription,
                              }: ProjectDescriptionDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">More information</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    {projectName}
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <DialogDescription className={"text-foreground"}>
                    {longDescription.split("\n").map((text, i) => <span className={"mb-1 block"} key={i}>{text}</span>)}
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
}