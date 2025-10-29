import {SkillLevelItem} from "@/components/skill-level-item";
import {SkillLevel} from "@/components/skill-level-bar";
import React from "react";

export function ProficienciesSection() {
    return <>
        <h2 className={"font-bold text-5xl text-center mt-12"}> Proficiencies</h2>
        <p className={"text-accent text-center mb-10"}>My confidence and experience with
            technologies</p>
        {/* rounded-r-none */}
        <div className="grid grid-cols-2 grid-rows-5 gap-10">
            <SkillLevelItem title={"C# (ASP.NET Core)"} level={SkillLevel.Advanced}/>
            <SkillLevelItem title={"Javascript"} level={SkillLevel.Intermediate}/>
            <SkillLevelItem title={"Typescript"} level={SkillLevel.Advanced}/>
            <SkillLevelItem title={"Azure Cloud"} level={SkillLevel.Intermediate}/>
            <SkillLevelItem title={"DevOps"} level={SkillLevel.Advanced}/>
            <SkillLevelItem title={"HTML/CSS"} level={SkillLevel.Intermediate}/>
            <SkillLevelItem title={"IaC (Terraform)"} level={SkillLevel.Beginner}/>
            <SkillLevelItem title={"Kubernetes"} level={SkillLevel.Intermediate}/>
            <SkillLevelItem title={"GitOps (ArgoCD)"} level={SkillLevel.Beginner}/>
            <SkillLevelItem title={"Database (PostgreSQL, MySQL)"} level={SkillLevel.Advanced}/>
        </div>
    </>;
}