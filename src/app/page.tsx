import {cn} from "@/lib/utils";
import {HobbyCard} from "@/components/hobby-card";
import {SkillCard} from "@/components/skill-card";
import Image from "next/image";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import {ProjectCard, ProjectCardVariant} from "@/components/project-card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {SkillLevel} from "@/components/skill-level-bar";
import {SkillLevelItem} from "@/components/skill-level-item";
import DigitalRain from "@/components/digital-rain";
import {ExperienceCard, ExperienceCardVariant} from "@/components/experience-card";

export default function Home() {
    const sectionClassName = "min-h-dvh mb-10";
    const sectionTitleClassName = "font-bold text-5xl text-center mt-12";
    return (
        <div className={"flex flex-col"}>
            <DigitalRain/>
            <section className={cn(sectionClassName, "mt-15")} id={"melanie"}>
                <div className="flex flex-row items-center justify-between mt-2 p-5">
                    <div>
                        <p className={"bg-tag text-tag-foreground w-fit px-2 py-1 mb-5"}
                           style={{borderRadius: '15px'}}>
                            Available for opportunities</p>
                        <h2 className={"font-bold text-foreground text-5xl mb-2"}>Hi, I&apos;m <span
                            className={"text-primary"}>Melanie</span></h2>
                        <div className={"font-bold text-accent mb-4 text-2xl"}>
                            {"<"}
                            <TypingText
                                className={"text-foreground font-bold"}
                                text={[
                                    "When not coding, I'm lost in the worlds of Stephen King",
                                    "Adrenaline junkie who lives for high G-forces",
                                    "I love coding while listening to Flume",
                                    "My best collaborative projects with friends, dice, and a D&D character sheet",
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
                            {"/>"}
                        </div>

                        <p className={"w-[40dvw]"}>
                            Hi! I’m a fullstack developer who loves diving into complex projects that solve real
                            problems. I’m most at home working with C# in Rider and Next.JS/Typescript in Webstorm,
                            exploring new ideas with curiosity and focus. Music is my coding companion, from hardstyle
                            and drum & bass to metal, it keeps me in the zone.
                            Outside of coding, you will find me reading books of Stephen King or other authors,
                            sketching, dancing at festivals, Going to theme parks or playing D&D with friends. I’m
                            spontaneous, a bit sarcastic, endlessly curious, and driven by empathy in everything I
                            do.</p>
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
                </div>
            </section>

            <section className={sectionClassName} id={"about"}>
                <h2 className={"font-bold text-foreground text-5xl text-center"}>About <span
                    className={"text-primary"}>Me</span></h2>
                <p className={"text-accent text-center"}>Get to know me</p>
                <div className="flex justify-between">
                    <div className="w-1/2 flex flex-col">
                        <h2 className={"font-bold text-foreground text-5xl mb-2"}><span
                            className={"text-primary"}>My</span> story </h2>
                        <p className={"mr-50"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere
                            eleifend ex eu tincidunt.
                            In eleifend luctus blandit. Maecenas sollicitudin ac augue at viverra. Nullam sodales eros
                            et ornare lobortis.
                            Aenean euismod congue lacus, a tincidunt nisl porta nec. Aliquam interdum id enim ut
                            consequat.viverra ligula.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            Vivamus malesuada ex dui.
                            Phasellus augue urna, aliquet in placerat eu,
                            molestie at neque. Quisque tincidunt porta mauris ut dictum. Mauris lorem </p>
                    </div>

                    <div className="w-1/2 flex flex-col">
                        <p className={"font-bold text-2xl text-center mb-1"}>Hobbies and interests</p>
                        <div className="grid grid-cols-2 grid-rows-3 gap-2">
                            <HobbyCard name={"Listen music"} tags={["D&B", "Raw", "EDM", "Metal"]}
                                       id={""} iconProps={{icon: "arcticons:vibe-music"}}/>
                            <HobbyCard name={"Hobby"} tags={["Thriller", "Sci-fi", "Fantacy", "Horror"]}
                                       id={""} iconProps={{icon: "arcticons:cool-reader"}}/>
                            <HobbyCard name={"Festivals"}
                                       tags={["Defqon", "Decibel", "Spoontech", "Liquicity"]} id={""}
                                       iconProps={{icon: "arcticons:qdance"}}/>
                            <HobbyCard name={"Gaming"}
                                       tags={["Simulator", "Looter Shooter", "Cozy", "Action"]} id={""}
                                       iconProps={{icon: "ion:game-controller-outline"}}/>
                            <HobbyCard name={"Drinking Coffee"} tags={["Hot", "Cold", "Hazelnut", "To go"]}
                                       id={""} iconProps={{icon: "hugeicons:coffee-02"}}/>
                            <HobbyCard name={"Lego"} tags={["Collect", "Build", "Moc", "Achieve"]}
                                       id={""} iconProps={{icon: "lucide:toy-brick"}}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={sectionClassName} id={"skills"}>
                <h2 className={cn(sectionTitleClassName, "mb-8")}> Skills</h2>
                <div className="grid grid-cols-3 gap-4">
                    <SkillCard name={"Backend"} description={"The Logic of the application"}
                               tags={["C#", "DotNet", "PostgreSQL", "Mongo DB", "Rabbit  MQ"]}
                               iconProps={{icon: "icon-park-outline:source-code"}}/>
                    <SkillCard name={"Cloud & Devops"} description={"This is a description"}
                               tags={["Azure", "Docker", "Argo CD", "Kubernetes", "Terraform",]}
                               iconProps={{icon: "tabler:cloud"}}/>
                    <SkillCard name={"Frontend"} description={"This is a description"}
                               tags={["React", "Next.JS", "TypeScript", "JavaScript", "HTML", "Tailwind", "Css"]}
                               iconProps={{icon: "solar:code-2-linear"}}/>
                    <SkillCard name={"Design & UX"} description={"This is a description"}
                               tags={["Figma", "Prototyping", "User Research", "UX Design"]}
                               iconProps={{icon: "heroicons:paint-brush"}}/>
                    <SkillCard name={"Tools & Technology"} description={"This is a description"}
                               tags={["Git", "Rider", "Webstorm", "VS Code", "Postman", "Äzure Pipelines", "Trello"]}
                               iconProps={{icon: "arcticons:git"}}/>
                    <SkillCard name={"Soft Skills"} description={"This is a description"}
                               tags={["Agile/ Scrum", "Team Leadership", "Communication", "Project Management"]}
                               iconProps={{icon: "lets-icons:user"}}/>
                </div>
            </section>

            <section className={sectionClassName} id={"proficiencies"}>
                <h2 className={sectionTitleClassName}> Proficiencies</h2>
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

            </section>

            <section className={sectionClassName} id={"projects"}>
                <h2 className={cn(sectionTitleClassName )}>Projects</h2>
                <p className={"text-accent text-center mb-10"}>My projects so far</p>
                <div className="grid grid-cols-2 gap-10">
                    <ProjectCard
                        variant={ProjectCardVariant.Client}
                        name={"Sue"}
                        description={"Green energy"}
                        tags={["C#", "DotNet", "PostGreSQL", "Rabbit MQ", "Mongo DB"]}
                        gitUrl={""}
                        demoUrl={""}
                    />
                    <ProjectCard
                        variant={ProjectCardVariant.School}
                        name={"Chroma"}
                        description={"Enterprise software project. An Instagram clone"}
                        tags={["C#", "DotNet", "Kubernetes", "Argo CD", "Mongo DB"]}
                        gitUrl={"https://github.com/orgs/Chroma-S6/repositories"}
                        demoUrl={""}
                    />
                </div>
            </section>

            <section className={sectionClassName} id={"experience"}>
                <h2 className={cn(sectionTitleClassName )}>Experience</h2>
                <p className={"text-accent text-center mb-10"}>My educational journey and experiences so far</p>
                <div className="grid grid-cols-2 gap-10">
                    <ExperienceCard
                        variant={ExperienceCardVariant.Work}
                        name={"Mediaan"}
                        description={"Fullstack developer"}
                        tags={["C#", "DotNet", "PostGreSQL", "Terraform", "Mongo DB"]}
                    />
                    <ExperienceCard
                        variant={ExperienceCardVariant.Education}
                        name={"Fontys University"}
                        description={"Bachelor Software Engineer"}
                        tags={["C#", "DotNet", "PostGreSQL", "Terraform", "Mongo DB"]}
                    />
                </div>
            </section>

            <section className={sectionClassName} id={"contact"}>
                <h2 className={sectionTitleClassName}>Contact</h2>
            </section>

        </div>
    )
}
