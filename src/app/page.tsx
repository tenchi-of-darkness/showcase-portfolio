import {cn} from "@/lib/utils";
import DigitalRain from "@/components/digital-rain";
import React from "react";
import {LandingSection} from "@/components/sections/landing";
import {ExperienceSection} from "@/components/sections/experience";
import {ProjectsSection} from "@/components/sections/projects";
import {ProficienciesSection} from "@/components/sections/proficiencies";
import {SkillsSection} from "@/components/sections/skills";
import {AboutSection} from "@/components/sections/about";

export default function Home() {
    const sectionClassName = "mb-10 mx-5";
    return (
        <div className={"flex flex-col sm:px-5"}>
            <DigitalRain/>
            <section className={cn(sectionClassName, "sm:min-h-dvh mt-15")} id={"melanie"}>
                <LandingSection/>
            </section>

            <section className={cn(sectionClassName, "sm:min-h-dvh pt-12")} id={"about"}>
                <AboutSection/>
            </section>

            <section className={cn(sectionClassName, "sm:min-h-dvh")} id={"skills"}>
                <SkillsSection/>
            </section>

            <section className={cn(sectionClassName, "sm:min-h-dvh")} id={"proficiencies"}>
                <ProficienciesSection/>
            </section>

            <section className={cn(sectionClassName, "sm:min-h-dvh")} id={"projects"}>
                <ProjectsSection/>
            </section>

            <section className={sectionClassName} id={"experience"}>
                <ExperienceSection/>
            </section>
        </div>
    )
}
