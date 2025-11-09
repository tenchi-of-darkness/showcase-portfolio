import {HobbyCard} from "@/components/hobby-card";
import React from "react";
import hobbiesData from "@/data/hobbies.json"

export function AboutSection() {
    return <>
        <h2 className={"font-bold text-foreground text-5xl text-center"}>About <span
            className={"text-primary"}>Me</span></h2>
        <p className={"text-accent text-center"}>Get to know me</p>
        <div className="grid sm:grid-cols-2 sm:p-5 gap-y-5">
            <div className="flex flex-col items-center sm:items-start row-2 sm:row-1">
                <h2 className={"font-bold text-foreground text-5xl mb-3"}><span
                    className={"text-primary"}>My</span> story </h2>
                <div className={"sm:mr-50 text-sm"}>
                    <p className={"sm:w-[40dvw] mb-3"}>
                        Ever since I was little, I’ve been fascinated by how technology works.
                        When our family computer broke and we didn’t have much money to replace it, my dad and I
                        spent time fixing it together using old parts from family friends. I was too young to do
                        most of the work, but that moment sparked something in me, a deep curiosity for
                        understanding and creating with technology.
                    </p>
                    <p className={"mb-3"}>
                        In primary school, I discovered programming for the first time while coding a Lego robot
                        with Scratch. I was amazed that I could control something I built with logic and
                        creativity,
                        it felt like a new world opened before me. That mix of problem-solving and imagination
                        stuck with me ever since.
                    </p>
                    <p className={"mb-3"}>
                        When it came time to choose a study path, I wasn’t sure at first. Most of my friends
                        went a
                        different direction, but after some reflection, I realized my true fascination was with
                        IT.
                        I started studying IT support and infrastructure, which gave me a solid technical
                        foundation
                        in networks, hardware, and cloud communication. Still, I felt something was missing, I
                        wanted more challenge, more creativity. Remembering how much I enjoyed coding as a kid,
                        I
                        decided to take a leap into software development, and it turned out to be the perfect
                        fit.
                    </p>
                    <p>
                        Now, as a fullstack developer, I combine my logical side with my creative spirit. I love
                        designing intuitive interfaces, building complex systems, and bringing ideas to life. My
                        background in infrastructure helps me understand how everything connects, from code to
                        cloud. I’m passionate about learning new technologies, solving real-world problems to
                        grow
                        within a tech company where I can keep challenging myself and improving
                        every day.
                    </p>
                </div>
            </div>

            <div className="flex flex-col">
                <p className={"font-bold text-2xl text-center mb-4 mt-3"}>Hobbies and interests</p>
                <div className="grid grid-cols-2 grid-rows-3 gap-2">
                    {hobbiesData.map((hobby, i) => (
                        <HobbyCard
                            key = {i}
                            name={hobby.name}
                            tags={hobby.tags}
                            id={hobby.id}
                            iconProps={{icon: hobby.iconName}}/>
                    ))}
                </div>
            </div>
        </div>
    </>;
}