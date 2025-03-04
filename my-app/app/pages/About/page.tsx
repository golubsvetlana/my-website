import SkillList from "./SkillList";
import { skills } from "./skill-data";

export default function AboutPage() {
    return (
        <>
            <title>About</title>
        <h1>About</h1>
        <SkillList skills={skills} />
        </>
    )
            
    
}