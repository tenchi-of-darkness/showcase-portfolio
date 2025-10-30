import {ProjectCard} from "@/components/project-card";
import React from "react";
import projectsData from "@/data/projects.json"

export function ProjectsSection() {
    return <>
        <h2 className={"font-bold text-5xl text-center mt-12"}>Projects</h2>
        <p className={"text-accent text-center mb-10"}>My projects so far</p>
        <div className="grid grid-cols-2 gap-10">
            {projectsData.map((item, i) => (
                <ProjectCard
                    key={i}
                    title={item.client}
                    projectName={item.title}
                    smallDescription={item.smallDescription}
                    longDescription={item.longDescription}
                    tags={item.tags}
                    gitUrl={item.gitUrl ?? undefined}
                    demoUrl={item.demoUrl ?? undefined}
                    design={item.design}
                />
            ))}
        </div>
    </>;
}