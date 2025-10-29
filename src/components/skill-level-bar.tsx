export enum SkillLevel {
    Beginner,
    Intermediate,
    Advanced,
    Expert
}

export interface SkillLevelBarProps {
    level: SkillLevel
}

export function SkillLevelBar(props: SkillLevelBarProps) {
    const barWidth = props.level + 1;

    let skillLevelTitle = "";

    switch (props.level) {
        case SkillLevel.Beginner:
            skillLevelTitle = "Beginner";
            break;
        case SkillLevel.Intermediate:
            skillLevelTitle = "Intermediate";
            break;
        case SkillLevel.Advanced:
            skillLevelTitle = "Advanced";
            break;
        case SkillLevel.Expert:
            skillLevelTitle = "Expert";
            break;
    }

    return (
        <div
            className={"bg-linear-(--level-gradient) text-background w-full h-8 rounded-xl overflow-clip flex items-center justify-center border-primary border-2"}>
            <div className={"h-full flex items-center justify-center"}
                 style={{width: 100 / 4 * barWidth + "%"}}>{skillLevelTitle}</div>
            <div className={"h-full bg-background/90 backdrop-blur-xs"} style={{width: 100 - 100 / 4 * barWidth + "%"}}></div>
        </div>
    );
}