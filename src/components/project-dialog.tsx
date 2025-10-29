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

export interface ProjectDialogProps {
    title: string;
    projectName: string;
    longDescription: string;
}

export function ProjectDialog({
                                  title,
                                  projectName,
                                  longDescription,
                              }: ProjectDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">More information</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    {projectName}
                    <DialogTitle> {title} </DialogTitle>
                    <DialogDescription>
                        {longDescription}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}