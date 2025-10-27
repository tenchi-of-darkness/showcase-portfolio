import {SkillLevel, SkillLevelBar} from "@/components/skill-level-bar";

export function SkillLevelItem(props: { title: string, level: SkillLevel }) {
    return <div className={"mx-4"}>
        <h1 className={"mb-2 font-bold text-2xl"}>{props.title}</h1>
        <SkillLevelBar level={props.level}/>
    </div>;
}