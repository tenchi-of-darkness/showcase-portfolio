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
                               projectNames: ["Chroma", "Green Energy Workload Scheduler"]
                           },
                           {
                               name: "PostgreSQL",
                               title: "Database",
                               description: "",
                               projectNames: ["Chroma", "Green Energy Workload Scheduler"]
                           },
                           {
                               name: "MongoDB",
                               title: "Database",
                               description: "Smart Classroom",
                               subtitle: ""
                           },
                           {
                               name: "RabbitMQ",
                               title: "Message bus",
                               description: "",
                               projectNames: ["Chroma", "Green Energy Workload Scheduler"]
                           },
                       ]}
                       iconProps={{icon: "icon-park-outline:source-code"}}/>
            <SkillCard name={"Cloud & Devops"} description={"This is a description"}
                       tags={[
                           {
                               name: "Azure",
                               title: ".NET",
                               description: "Cloud & Devops",
                               projectNames: ["Chroma"]
                           },
                           {
                               name: "Docker",
                               title: "Containerisation",
                               description: "",
                               projectNames: ["Chroma"]
                           },
                           {
                               name: "Argo CD",
                               title: "Deployment management",
                               description: "Kubernetes",
                               projectNames: ["Chroma"]
                           },
                           {
                               name: "Kubernetes",
                               title: "Deployment",
                               description: "",
                               projectNames: ["Chroma", "Showcase Platform"]
                           },
                           {
                               name: "Terraform",
                               title: "Infrastructure as code",
                               description: "",
                               projectNames: ["Showcase Platform"]
                           },

                       ]}
                       iconProps={{icon: "tabler:cloud"}}/>
            <SkillCard name={"Frontend"} description={"This is a description"}
                       tags={[
                           {
                               name: "React",
                               title: "Frontend",
                               description: "",
                               projectNames: ["Smart Classroom"]
                           },
                           {
                               name: "Next.JS",
                               title: "Frontend",
                               description: "",
                               projectNames: ["Chroma", "Showcase Platform"]
                           },
                           {
                               name: "TypeScript",
                               title: "Frontend",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "JavaScript",
                               title: "Frontend",
                               description: "",
                               subtitle: ""
                           },
                           {
                               name: "HTML",
                               title: "",
                               description: "",
                               projectNames: ["Chroma", "Showcase Platform"]
                           },
                           {
                               name: "Tailwind",
                               title: "",
                               description: "",
                               projectNames: ["Chroma", "Showcase Platform", "Smart Classroom"]
                           },
                           {
                               name: "CSS",
                               title: "",
                               description: "",
                               projectNames: ["Chroma", "Showcase Platform", "Smart Classroom"]
                           },

                       ]}
                       iconProps={{icon: "solar:code-2-linear"}}/>
            <SkillCard name={"Design & UX"} description={"This is a description"}
                       tags={[
                           {
                               name: "Figma",
                               title: ".NET",
                               description: "",
                               projectNames: ["Chroma", "Showcase Platform", "Smart Classroom"]
                           },
                           {
                               name: "Prototyping",
                               title: "",
                               description: "",
                               projectNames: ["Showcase Platform", "Smart Classroom"]
                           },
                           {
                               name: "User Research",
                               title: "",
                               description: "",
                               projectNames: ["Smart Classroom"]
                           },
                           {
                               name: "UX Design",
                               title: "",
                               description: "",
                               projectNames: ["Smart Classroom"]
                           },
                       ]}
                       iconProps={{icon: "heroicons:paint-brush"}}/>
            <SkillCard name={"Tools & Technology"} description={"This is a description"}
                       tags={[
                           {
                               name: "Git",
                               title: ".NET",
                               description: "",
                               projectNames: ["Showcase Platform", "Smart Classroom", "Chroma", "Green Energy Workload Scheduler"]
                           },
                           {
                               name: "Rider",
                               title: "",
                               description: "",
                               projectNames: ["Showcase Platform", "Smart Classroom", "Chroma", "Green Energy Workload Scheduler"]
                           },
                           {
                               name: "Webstorm",
                               title: "",
                               description: "",
                               projectNames: ["Showcase Platform", "Smart Classroom", "Chroma", "Green Energy Workload Scheduler"]
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