import {ExperienceCard, ExperienceCardVariant} from "@/components/experience-card";
import React from "react";

export function ExperienceSection() {
    return <>
        <h2 className={"font-bold text-5xl text-center mt-12"}>Experience</h2>
        <p className={"text-accent text-center mb-10"}>My educational journey and experiences so far</p>
        <div className="grid grid-cols-2 gap-10">
            <ExperienceCard
                variant={ExperienceCardVariant.Work}
                title={"Experience"}
                name={"Mediaan"}
                smallDescription={"A Microservice architecture, backend in C#"}
                longDescription={"Fullstack developer, A Microservice architecture, backend in C#, Dashboard to display, start and stop other applications and apps"}
            />
            <ExperienceCard
                variant={ExperienceCardVariant.Education}
                title={"Experience"}
                name={"Fontys University"}
                smallDescription={"Bachelor"}
                longDescription={"Fullstack developer, choice Software, minor Iot(Industry 4.0) and Frontend development as extra course"}
            />
        </div>
    </>;
}