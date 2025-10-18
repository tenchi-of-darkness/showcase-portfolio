import {cn} from "@/lib/utils";

export default function Home() {
    const sectionClassName = "min-h-[calc(100lvh-40px)]"

    return (
        <div className={"flex flex-col mt-10 overflow-y-scroll h-[calc(100lvh-40px)] snap-y"}>
            <section id={"melanie"} className={cn(sectionClassName, "snap-start bg-red-100")}>
                Melanie
            </section>
            <section id={"about"} className={cn(sectionClassName, "snap-start bg-blue-100")}>
                About
            </section>
            <section id={"skills"} className={cn(sectionClassName, "snap-start bg-red-100")}>
                Skills
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
