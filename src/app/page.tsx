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
import {Icon} from "@iconify/react";
import React from "react";

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
                </div>
            </section>

            <section className={cn(sectionClassName, "mt-15")} id={"about"}>
                <h2 className={"font-bold text-foreground text-5xl text-center"}>About <span
                    className={"text-primary"}>Me</span></h2>
                <p className={"text-accent text-center"}>Get to know me</p>
                <div className="flex justify-between p-5">
                    <div className="w-1/2 flex flex-col">
                        <h2 className={"font-bold text-foreground text-5xl mb-3"}><span
                            className={"text-primary"}>My</span> story </h2>
                        <div className={"mr-50 text-sm"}>
                            <p className={"mb-3"}>
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

                    <div className="w-1/2 flex flex-col">
                        <p className={"font-bold text-2xl text-center mb-4 mt-3"}>Hobbies and interests</p>
                        <div className="grid grid-cols-2 grid-rows-3 gap-2">
                            <HobbyCard
                                name={"Listen music"}
                                tags={[
                                    {
                                        name: "D&B",
                                        title: "Neurofunk",
                                        description: "Black Sun Empire, Sinister Souls, Delta Heavy, A.M.C",
                                        subtitle: "Favourite song: Back down by Black Sun Empire"
                                    },
                                    {
                                        name: "Hardstyle",
                                        title: "Raw",
                                        description: "Delete, The Smiler, Spoontech, DEEZL, Faceless ",
                                        subtitle: "Favourite song: Explosion by Delete",
                                    },
                                    {
                                        name: "EDM",
                                        title: "Electronic",
                                        description: "Flume",
                                        subtitle: "Favourite song: Shine, Glow, Glisten by Flume"
                                    },
                                    {
                                        name: "Metal",
                                        title: "",
                                        description: "System of a Down, Slipknot",
                                        subtitle: "Favourite song: Chop Suey by System of a Down"
                                    },
                                ]}
                                id={""}
                                iconProps={{icon: "arcticons:vibe-music"}}/>
                            <HobbyCard
                                name={"Hobby"}
                                tags={[
                                    {
                                        name: "Thriller",
                                        title: "Nicci French",
                                        description: "The unheard",
                                        subtitle: "Memory is a lie, a creative act, a flimsy shield against the truth -The unheard"
                                    },
                                    {
                                        name: "Sci-fi",
                                        title: "Pierce Brown",
                                        description: "Red Rising Series",
                                        subtitle: "Typical science fiction"
                                    },
                                    {
                                        name: "Fantasy",
                                        title: "Deborah Harkness",
                                        description: "A Discovery of Witches series",
                                        subtitle: "Vampires, witches, witchcraft, romance and alchemy"
                                    },
                                    {
                                        name: "Horror",
                                        title: "Stephen King",
                                        description: "Fairy tale, The institute",
                                        subtitle: "Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win -Stephen King"
                                    },
                                    {
                                        name: "Dystopian",
                                        title: "James Dashner",
                                        description: "The Maze runner series",
                                        subtitle: "sometimes you don't look very hard for things you don't believe will or can happen. --The Maze runner"
                                    }
                                ]}
                                id={""}
                                iconProps={{icon: "arcticons:cool-reader"}}/>
                            <HobbyCard
                                name={"Festivals"}
                                tags={[
                                    {
                                        name: "Defqon",
                                        title: "Hardstyle",
                                        description: "Four day festival",
                                        subtitle: "Sacred Oath"
                                    },
                                    {
                                        name: "Decibel",
                                        title: "Hardstyle",
                                        description: "Three day festival",
                                        subtitle: "Natures Rhythm"
                                    },
                                    {
                                        name: "Spoontech",
                                        title: "Hardstyle",
                                        description: "One day party",
                                        subtitle: "Klaplong all day"
                                    },
                                    {
                                        name: "Liquicity",
                                        title: "Drum and bass",
                                        description: "Three day festival",
                                        subtitle: "Dance the whole weekend",
                                    },
                                ]}
                                id={""}
                                iconProps={{icon: "arcticons:qdance"}}/>
                            <HobbyCard
                                name={"Gaming"}
                                tags={[
                                    {
                                        name: "Simulator",
                                        title: "The Sims",
                                        description: "Build and create a sim",
                                        subtitle: ""
                                    },
                                    {
                                        name: "Looter Shooter",
                                        title: "Borderlands",
                                        description: "Played all verions",
                                        subtitle: ""
                                    },
                                    {
                                        name: "Cozy",
                                        title: "Stardew Vally",
                                        description: "Farming games to relax",
                                        subtitle: ""
                                    },
                                    {
                                        name: "Action",
                                        title: "Horizon",
                                        description: "Great game with a fantastic story",
                                        subtitle: ""
                                    },
                                ]}
                                id={""}
                                iconProps={{icon: "ion:game-controller-outline"}}/>
                            <HobbyCard
                                name={"Drinking Coffee"}
                                tags={[
                                    {
                                        name: "Hot",
                                        title: "Cappuccino without sugar",
                                        description: "",
                                        subtitle: ""
                                    },
                                    {
                                        name: "Cold",
                                        title: "Iced coffee or cold brew",
                                        description: "",
                                        subtitle: ""
                                    },
                                    {
                                        name: "Hazelnut",
                                        title: "Syrup",
                                        description: "",
                                        subtitle: ""
                                    },
                                    {
                                        name: "To go",
                                        title: "Starbucks or local coffee place",
                                        description: "",
                                        subtitle: ""
                                    },
                                ]}
                                id={""}
                                iconProps={{icon: "hugeicons:coffee-02"}}/>
                            <HobbyCard
                                name={"Lego"}
                                tags={[
                                    {
                                        name: "Collect",
                                        title: "",
                                        description: "",
                                        subtitle: ""
                                    },
                                    {
                                        name: "Build",
                                        title: "",
                                        description: "",
                                        subtitle: ""
                                    },
                                    {
                                        name: "Moc",
                                        title: "",
                                        description: "",
                                        subtitle: ""
                                    },
                                    {
                                        name: "Achieve",
                                        title: "",
                                        description: "",
                                        subtitle: ""
                                    },
                                ]}
                                id={""}
                                iconProps={{icon: "lucide:toy-brick"}}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={sectionClassName} id={"skills"}>
                <h2 className={cn(sectionTitleClassName, "mb-8")}> Skills</h2>
                <div className="grid grid-cols-3 gap-4">
                    <SkillCard name={"Backend"} description={"The Logic of the application"}
                               tags={[
                                   {
                                       name: "C#",
                                       title: ".NET",
                                       description: "Backend Development, Microservice architecture",
                                       subtitle: "Used in Chroma"
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
                <h2 className={cn(sectionTitleClassName)}>Projects</h2>
                <p className={"text-accent text-center mb-10"}>My projects so far</p>
                <div className="grid grid-cols-2 gap-10">
                    <ProjectCard
                        variant={ProjectCardVariant.Client}
                        title={"Sue"}
                        projectName={"Green energy"}
                        smallDescription={"This project calculates the most green effecient way to use databases and server accross the world by calculatng where it is most sunny and most windy at that time to utilize the most green energy"}
                        longDescription={"This is a long description"}
                        tags={[
                            {
                                name: "C#",
                                title: "Backend in C#",
                                description: "Microservice architecture ",
                                subtitle: ""
                            },
                            {
                                name: "DotNet",
                                title: "Iced coffee or cold brew",
                                description: "",
                                subtitle: ""
                            },
                            {
                                name: "Hazelnut",
                                title: "Syrup",
                                description: "",
                                subtitle: ""
                            },
                            {
                                name: "To go",
                                title: "Starbucks or local coffee place",
                                description: "",
                                subtitle: ""
                            },
                        ]}
                        gitUrl={""}
                        demoUrl={""}
                    />
                    <ProjectCard
                        variant={ProjectCardVariant.School}
                        title={"fontys"}
                        projectName={"Chroma"}
                        smallDescription={"This project calculates the most green effecient way to use databases and server accross the world by calculatng where it is most sunny and most windy at that time to utilize the most green energy"}
                        longDescription={"This is a long description"}
                        tags={[
                            {
                                name: "C#",
                                title: "Backend in C#",
                                description: "Microservice architecture ",
                                subtitle: ""
                            },
                            {
                                name: "DotNet",
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
                                name: "Rabbit MQ",
                                title: "",
                                description: "Used for messaging between services",
                                subtitle: ""
                            },
                        ]}
                        gitUrl={"https://github.com/orgs/Chroma-S6/repositories"}
                        demoUrl={""}
                    />
                    <ProjectCard
                        variant={ProjectCardVariant.Client}
                        title={"Fontys"}
                        projectName={"Smart classroom"}
                        smallDescription={"This project displays the sensors located in the classroom in a dashboard"}
                        longDescription={"This is a long description"}
                        tags={[
                            {
                                name: "C#",
                                title: "Backend in C#",
                                description: "Microservice architecture ",
                                subtitle: ""
                            },
                            {
                                name: "DotNet",
                                title: "Iced coffee or cold brew",
                                description: "",
                                subtitle: ""
                            },
                            {
                                name: "Hazelnut",
                                title: "Syrup",
                                description: "",
                                subtitle: ""
                            },
                            {
                                name: "To go",
                                title: "Starbucks or local coffee place",
                                description: "",
                                subtitle: ""
                            },
                        ]}
                        gitUrl={""}
                        demoUrl={""}
                    />
                    <ProjectCard
                        variant={ProjectCardVariant.Client}
                        title={"Mediaan"}
                        projectName={"Showcase platform"}
                        smallDescription={"Dashboard to display, start and stop other applications and apps"}
                        longDescription={"A Microservice architecture, backend in c#"}
                        tags={[
                            {
                                name: "C#",
                                title: "Backend in C#",
                                description: "Microservice architecture ",
                                subtitle: ""
                            },
                            {
                                name: "DotNet",
                                title: "Iced coffee or cold brew",
                                description: "",
                                subtitle: ""
                            },
                            {
                                name: "Rabbit MQ",
                                title: "Syrup",
                                description: "",
                                subtitle: ""
                            },
                            {
                                name: "Terraform",
                                title: "",
                                description: "A infrastructure tool IaC",
                                subtitle: ""
                            },
                        ]}
                        gitUrl={""}
                        demoUrl={""}
                    />
                </div>
            </section>

            <section className={sectionClassName} id={"experience"}>
                <h2 className={cn(sectionTitleClassName)}>Experience</h2>
                <p className={"text-accent text-center mb-10"}>My educational journey and experiences so far</p>
                <div className="grid grid-cols-2 gap-10">
                    <ExperienceCard
                        variant={ExperienceCardVariant.Work}
                        title={"Experience"}
                        name={"Mediaan"}
                        smallDescription={"A Microservice architecture, backend in C#"}
                        longDescription={"Fullstack developer, A Microservice architecture, backend in C#, Dashboard to display, start and stop other applications and apps"}
                    />
                    <ExperienceCard
                        variant={ExperienceCardVariant.Education}
                        title={"Experience"}
                        name={"Fontys University"}
                        smallDescription={"Bachelor"}
                        longDescription={"Fullstack developer, choice Software, minor Iot(Industry 4.0) and Frontend development as extra course"}
                    />
                </div>
            </section>
            <footer className={cn(sectionClassName, "flex flex-col items-center" )} id={"footer"}>
                <h1 className={cn(sectionTitleClassName,"w-fit mb-10")}>Contact me via</h1>
                <div className={"flex flex-row justify-center"}>
                    <a href="https://github.com/tenchi-of-darkness" target={"_blank"} className={"px-0.5 hover:bg-transparent text-secondary"}>
                        <Icon className={"text-secondary size-6"} icon="line-md:github-twotone"/>
                    </a>
                    <a href="https://www.linkedin.com/in/melanie-van-de-graaf/" target={"_blank"} className={"px-0.5 hover:bg-transparent text-secondary"}>
                        <Icon className={"text-secondary size-6"} icon="line-md:linkedin"/>
                    </a>
                </div>
            </footer>
        </div>
    )
}
