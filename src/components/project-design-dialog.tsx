import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React from "react";
import {Button} from "@/components/ui/button";
import Image from "next/image";

export interface ProjectDesignDialogProps {
    title: string;
    imageSrc: string;
}

export function ProjectDesignDialog({
                                        title,
                                        imageSrc,
                                    }: ProjectDesignDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">See Design</Button>
            </DialogTrigger>
            <DialogContent className={"max-w-fit sm:max-w-fit"}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <Image src={imageSrc} width={800} height={500} alt={"Design for "+ title} />
            </DialogContent>
        </Dialog>
    );
}