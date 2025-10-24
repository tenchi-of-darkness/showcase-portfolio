import {cn} from "@/lib/utils";
import {HobbyCard} from "@/components/hobby-card";
import {SkillCard} from "@/components/skill-card";

export default function Home() {
    const sectionClassName = "min-h-[calc(100lvh-40px)]"

    return (
        <div className={"flex flex-col mt-10 overflow-y-scroll h-[calc(100lvh-40px)] snap-y snap-proximity"}>
            <section id={"melanie"} className={cn(sectionClassName, "snap-start")}>
                <p className={"bg-tag text-tag-foreground w-fit p-1 mt-10 mb-10"}
                   style={{borderRadius: '15px'}}>
                    Available for opportunities</p>
                <h2 className={"font-bold text-5xl mb-2"}>Hi, I&apos;m Melanie</h2>
                <p className={"font-bold text-gray-500 mb-5 text-2xl"}>Fun facts/ Inspirational quote</p>
                <p className={"outline-2 outline-purple-500"} style={{borderRadius: '15px'}}>Cras vel augue
                    rhoncus, imperdiet libero eu,
                    viverra ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    curae; Vivamus malesuada ex dui.
                    Phasellus augue urna, aliquet in placerat eu, molestie at neque. Quisque tincidunt porta mauris ut
                    dictum. Mauris lorem
                    mi, commodo vitae sem at</p>
                <button className={"bg-purple-600 mt-5 text-white p-1"} style={{borderRadius: '15px'}}>View my
                    projects
                </button>
            </section>

            <section id={"about"} className={cn(sectionClassName, "snap-start")}>
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

            <section id={"skills"} className={cn(sectionClassName, "snap-start")}>
                <h2 className={"font-bold text-5xl text-center mb-1"}> Skills</h2>
                <div className="grid grid-cols-3 grid-rows-3 gap-4">
                    <SkillCard name={"Backend"} description={"This is a description"} tags={["C#", "DotNet", "PostgreSQL", "Mongo DB", "Rabbit  MQ"]}
                               iconProps={{icon: "heroicons:paint-brush"}}/>
                    <SkillCard name={"Cloud & Devops"} description={"This is a description"} tags={["Azure", "Docker", "Argo CD", "Kubernetes","Terraform",]}
                               iconProps={{icon: "heroicons:paint-brush"}}/>
                    <SkillCard name={"Frontend"} description={"This is a description"} tags={["hello"]}
                               iconProps={{icon: "heroicons:paint-brush"}}/>
                    <SkillCard name={"Design & UX"} description={"This is a description"} tags={["hello"]}
                               iconProps={{icon: "heroicons:paint-brush"}}/>
                    <SkillCard name={"Tools & Technology"} description={"This is a description"} tags={["hello"]}
                               iconProps={{icon: "heroicons:paint-brush"}}/>
                    <SkillCard name={"Soft Skills"} description={"This is a description"} tags={["hello"]}
                               iconProps={{icon: "heroicons:paint-brush"}}/>
                </div>
            </section>

            <section id={"proficiencies"} className={cn(sectionClassName, "snap-start")}>
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

            <section id={"projects"} className={cn(sectionClassName, "snap-start")}>
                Projects
            </section>

            <section id={"experience"} className={cn(sectionClassName, "snap-start")}>
                Experience
            </section>

            <section id={"contact"} className={cn(sectionClassName, "snap-start")}>
                Contact
            </section>

        </div>
    )
}
