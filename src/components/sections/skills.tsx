import {SkillCard} from "@/components/skill-card";
import React from "react";

export function SkillsSection() {
    return <>
        <h2 className={"font-bold text-5xl text-center mt-12 mb-8"}> Skills</h2>
        <div className="grid grid-cols-3 gap-4">
            <SkillCard name={"Backend"} description={"The Logic of the application"}
                       tags={[
                           {
                               name: "C#",
                               title: ".NET",
                               description: "Backend Development, Microservice architecture",
                               projectNames: ["Chroma", "Green energy"]
                           },
                           {
                               name: "PostgreSQL",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "MongoDB",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "RabbitMQ",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                       ]}
                       iconProps={{icon: "icon-park-outline:source-code"}}/>
            <SkillCard name={"Cloud & Devops"} description={"This is a description"}
                       tags={[
                           {
                               name: "Azure",
                               title: ".NET",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Docker",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Argo CD",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Kubernetes",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Terraform",
                               title: "",
                               description: "",
                               subtitle: ""
                           },

                       ]}
                       iconProps={{icon: "tabler:cloud"}}/>
            <SkillCard name={"Frontend"} description={"This is a description"}
                       tags={[
                           {
                               name: "React",
                               title: ".NET",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Next.JS",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "TypeScript",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "JavaScript",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "HTML",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Tailwind",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "CSS",
                               title: "",
                               description: "",
                               subtitle: ""
                           },

                       ]}
                       iconProps={{icon: "solar:code-2-linear"}}/>
            <SkillCard name={"Design & UX"} description={"This is a description"}
                       tags={[
                           {
                               name: "Figma",
                               title: ".NET",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Prototyping",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "User Research",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "UX Design",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                       ]}
                       iconProps={{icon: "heroicons:paint-brush"}}/>
            <SkillCard name={"Tools & Technology"} description={"This is a description"}
                       tags={[
                           {
                               name: "Git",
                               title: ".NET",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Rider",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Webstorm",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "VS Code",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Postman",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Azure Pipelines",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Trello",
                               title: "",
                               description: "",
                               subtitle: ""
                           },

                       ]}
                       iconProps={{icon: "arcticons:git"}}/>
            <SkillCard name={"Soft Skills"} description={"This is a description"}
                       tags={[
                           {
                               name: "Agile/Scrum",
                               title: ".NET",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Team Leadership",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Communication",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "Project Management",
                               title: "",
                               description: "",
                               subtitle: ""
                           },
                       ]}
                       iconProps={{icon: "lets-icons:user"}}/>
        </div>
    </>;
}