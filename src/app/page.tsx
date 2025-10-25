import {cn} from "@/lib/utils";
import {HobbyCard} from "@/components/hobby-card";
import {SkillCard} from "@/components/skill-card";
import Image from "next/image";
import TypingText from "@/components/ui/shadcn-io/typing-text";

export default function Home() {
    const sectionClassName = "min-h-dvh";
    return (
        <div className={"flex flex-col"}>
            <section className={cn(sectionClassName, "mt-15")} id={"melanie"}>
                <div className="flex flex-row items-center justify-between mt-2 p-5">
                    <div>
                        <p className={"bg-tag text-tag-foreground w-fit px-2 py-1 mb-5"}
                           style={{borderRadius: '15px'}}>
                            Available for opportunities</p>
                        <h2 className={"font-bold text-foreground text-5xl mb-2"}>Hi, I&apos;m <span className={"text-primary"}>Melanie</span></h2>
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

                        <p className={"w-[40dvw]"} style={{borderRadius: '15px'}}>
                            Cras vel augue rhoncus, imperdiet libero eu, viverra ligula. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia curae; Vivamus malesuada ex dui. Phasellus
                            augue urna, aliquet in placerat eu, molestie at neque. Quisque tincidunt porta mauris ut
                            dictum. Mauris lorem mi, commodo vitae sem at</p>
                        <button className={"bg-purple-600 mt-5 text-white p-1"} style={{borderRadius: '15px'}}>View my
                            projects
                        </button>
                    </div>

                    <div
                        className={"flex bg-primary rounded-full w-fit h-fit aspect-square p-2 pb-0 overflow-clip mx-20"}>
                        <Image src={"/melanie.png"} alt={"Picture of Melanie"} width={319} height={547}
                               style={{objectFit: "cover", objectPosition: "top"}}/>
                    </div>
                </div>
            </section>

            <section className={sectionClassName} id={"about"}>
                <h2 className={"font-bold text-5xl text-center mb-1"}>About me</h2>
                <p className={"text-purple-400 text-center"}>Get to know me</p>

                <div className="flex justify-between">
                    <div className="w-1/2 flex flex-col">
                        <p className={"font-bold text-2xl mb-1 text-left"}>My Story</p>
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
                <h2 className={"font-bold text-5xl text-center mt-5 mb-8"}> Skills</h2>
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
                <h2 className={"font-bold text-5xl text-center mb-1"}> Proficiencies</h2>
                <p className={"font-bold text-gray-500 text-center mb-10"}>My confidence and experience with
                    technologies</p>
                <div className="grid grid-cols-2 grid-rows-5 gap-10">
                    <p>C#</p>
                    <p>Skill</p>
                    <p>Javascript</p>
                    <p>Skill</p>
                    <p>TypeScript</p>
                    <p>Skill</p>
                    <p>Azurecloud</p>
                    <p>Skill</p>
                    <p>Devops</p>
                    <p>Skill</p>
                </div>

            </section>

            <section className={sectionClassName} id={"projects"}>
                Projects
            </section>

            <section className={sectionClassName} id={"experience"}>
                Experience
            </section>

            <section className={sectionClassName} id={"contact"}>
                Contact
            </section>

        </div>
    )
}
