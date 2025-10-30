import {SkillCard} from "@/components/skill-card";
import React from "react";
import skillsData from "@/data/skills.json"

export function SkillsSection() {
    return <>
        <h2 className={"font-bold text-5xl text-center mt-12 mb-8"}> Skills</h2>
        <div className="grid grid-cols-3 gap-4">
            {skillsData.map((skill, i) => (
                <SkillCard
                    key={i}
                    name={skill.name}
                    description={skill.description}
                    tags={skill.tags}
                    iconProps={{icon: skill.iconName}}/>
            ))}
        </div>
    </>;
}