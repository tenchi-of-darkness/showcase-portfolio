import {HobbyCard} from "@/components/hobby-card";
import React from "react";

export function AboutSection() {
    return <>
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
                                name: "FPS",
                                title: "Borderlands",
                                description: "Played all mainline games",
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
    </>;
}