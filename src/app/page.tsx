import {cn} from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Home() {
    const sectionClassName = "min-h-[calc(100lvh-40px)]"

    return (
        <div className={"flex flex-col mt-10 overflow-y-scroll h-[calc(100lvh-40px)] snap-y"}>
            <section id={"melanie"} className={cn(sectionClassName, "snap-start bg-gray-200")}>
                <p className={"bg-purple-100 w-fit p-1 mt-10 mb-10"} style={{borderRadius: '15px'}} >Available for opportunities</p>
                <h2 className={"font-bold text-5xl mb-2"}>Hi, I'm Melanie</h2>
                <p className={"font-bold text-gray-500 mb-5 text-2xl"}>Fun facts/ Inspirational quote</p>
                <p className={" outline outline-2 outline-purple-500"} style={{borderRadius: '15px'}}>Cras vel augue rhoncus, imperdiet libero eu,
                    viverra ligula. Vestibulum  ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia  curae; Vivamus malesuada ex dui.
                    Phasellus augue urna, aliquet in  placerat eu, molestie at neque. Quisque tincidunt porta mauris ut  dictum. Mauris lorem
                    mi, commodo vitae sem at</p>
                    <button className={"bg-purple-600 mt-5 text-white p-1"} style={{borderRadius: '15px'}} >View my projects</button>
            </section>

            <section id={"about"} className={cn(sectionClassName, "snap-start bg-blue-100")}>
                <h2 className={"font-bold text-5xl text-center mb-1"}>About me</h2>
                <p className={"text-purple-400 text-center"}>Get to know me</p>

                <div className="flex justify-between">
                    <div className="w-1/2 flex flex-col">
                        <p className={"font-bold text-2xl text-center mb-1 text-left"}>My Story</p>
                        <p className={"mr-50"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere  eleifend ex eu tincidunt.
                            In eleifend luctus blandit. Maecenas sollicitudin  ac augue at viverra. Nullam sodales eros et ornare lobortis.
                            Aenean  euismod congue lacus, a tincidunt nisl porta nec. Aliquam interdum id  enim ut consequat.viverra ligula.
                            Vestibulum  ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia  curae; Vivamus malesuada ex dui.
                            Phasellus augue urna, aliquet in  placerat eu,
                            molestie at neque. Quisque tincidunt porta mauris ut  dictum. Mauris lorem </p>
                    </div>

                    <div className="w-1/2 flex flex-col">
                        <p className={"font-bold text-2xl text-center mb-1"}>Hobbies and interests</p>
                        <div className="grid grid-cols-2 grid-rows-3 gap-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Project name</CardTitle>
                                    <CardDescription>
                                        This is a project description
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    This is the card content
                                </CardContent>
                                <CardFooter>
                                    <button variant="outline" className="w-full">
                                        Go to project
                                    </button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Project name</CardTitle>
                                    <CardDescription>
                                        This is a project description
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    This is the card content
                                </CardContent>
                                <CardFooter className="flex-col gap-2">
                                    <button variant="outline" className="w-full">
                                        Go to project
                                    </button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Project name</CardTitle>
                                    <CardDescription>
                                        This is a project description
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    This is the card content
                                </CardContent>
                                <CardFooter className="flex-col gap-2">
                                    <button variant="outline" className="w-full">
                                        Go to project
                                    </button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Project name</CardTitle>
                                    <CardDescription>
                                        This is a project description
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    This is the card content
                                </CardContent>
                                <CardFooter className="flex-col gap-2">
                                    <button variant="outline" className="w-full">
                                        Go to project
                                    </button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Project name</CardTitle>
                                    <CardDescription>
                                        This is a project description
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    This is the card content
                                </CardContent>
                                <CardFooter className="flex-col gap-2">
                                    <button variant="outline" className="w-full">
                                        Go to project
                                    </button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Project name</CardTitle>
                                    <CardDescription>
                                        This is a project description
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    This is the card content
                                </CardContent>
                                <CardFooter className="flex-col gap-2">
                                    <button variant="outline" className="w-full">
                                        Go to project
                                    </button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section id={"skills"} className={cn(sectionClassName, "snap-start bg-red-100")}>
                <h2 className={"font-bold text-5xl text-center mb-1"}> Skills</h2>
                <div className="grid grid-cols-3 grid-rows-3 gap-4">
                    <Card className="h-full w-full">
                        <CardHeader>
                            <CardTitle>Skill name</CardTitle>
                            <CardDescription>
                                This is a awesome skill description
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            icon or picture of skill
                        </CardContent>
                        <CardFooter>
                            A badge or tag with hover for more info
                        </CardFooter>
                    </Card>


                </div>
            </section>

            <section id={"projects"} className={cn(sectionClassName, "snap-start bg-blue-100")}>
                Projects
            </section>

            <section id={"experience"} className={cn(sectionClassName, "snap-start bg-red-100")}>
                Experience
            </section>

            <section id={"contact"} className={cn(sectionClassName, "snap-start bg-blue-100")}>
                Contact
            </section>

        </div>
    )
}
