import TypingText from "@/components/ui/shadcn-io/typing-text";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export function LandingSection() {
    return <div className="flex flex-row items-center justify-between mt-2 p-5">
        <div>
            <p className={"bg-tag text-tag-foreground w-fit px-2 py-1 mb-5"}
               style={{borderRadius: "15px"}}>
                Available for opportunities</p>
            <h2 className={"font-bold text-foreground text-5xl mb-2"}>Hi, I&apos;m <span
                className={"text-primary"}>Melanie</span></h2>
            <div className={"flex flex-row flex-wrap font-bold text-accent mb-4 text-2xl"}>
                {"<"}
                <TypingText
                    className={"text-foreground font-semibold"}
                    text={[
                        "When not coding, I'm lost in the worlds of Stephen King",
                        "Adrenaline junkie who lives for high G-forces",
                        "I love coding while listening to Flume",
                        "My best projects are with friends, \ndice, and a D&D character sheet",
                        "I love coding while listening to Spoontech",
                        "Chasing 155 BPM drops at Hardstyle festivals",
                        "I love coding while listening to Drum and Bass",
                        "My Bull Terrier works from home and my 2 cats work remote"
                    ]}
                    cursorClassName={"font-bold text-foreground/90 text-2xl"}
                    typingSpeed={60}
                    pauseDuration={4000}
                    showCursor={true}
                    variableSpeed={{min: 35, max: 60}}

                />
                <div className={"self-end"}>{"/>"}</div>
            </div>

            <div className={"w-[40dvw]"}>
                <p className={"mb-3"}>
                    Hi! I’m a fullstack developer who loves diving into complex projects that solve real
                    problems. I’m most at home working with C# in Rider and Next.JS/Typescript in Webstorm,
                    exploring new ideas with curiosity and focus. Music is my coding companion, from
                    hardstyle
                    and drum & bass to metal, it keeps me in the zone.
                    I’m spontaneous, a bit sarcastic, endlessly curious, and driven by empathy in everything
                    I
                    do.
                </p>
                <p>
                    Outside of coding, you will find me reading books of Stephen King or other authors,
                    sketching, dancing at festivals, Going to theme parks or playing D&D with friends. I’m
                    fascinated by facts and discoveries about space, our planet, and the universe, and I
                    love
                    spending time in nature, especially when I can walk under a starry night sky.
                </p>
            </div>
            <Button asChild>
                <Link href={"/#projects"} className={"bg-primary mt-5 text-white p-2"}>View my
                    projects</Link>
            </Button>
        </div>

        <div
            className={"flex bg-primary rounded-full w-fit h-fit aspect-square p-2 pb-0 overflow-clip mx-20"}>
            <Image src={"/melanie.png"} alt={"Picture of Melanie"} width={319} height={547}
                   style={{objectFit: "cover", objectPosition: "top"}}/>
        </div>
    </div>;
}