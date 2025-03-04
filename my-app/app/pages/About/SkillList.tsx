import Image from "next/image"
import { Skill } from "./skill-data"



export default function SkillList({ skills }:{skills: Skill[]}) {
    return (
        <>
            <div>
            {skills.map(Skill => {
                return (

                    <div key={Skill.id}>
                        <Image src={'/'+Skill.imageUrl} alt={Skill.name} width={50} height={50}/>
                        <h2>
                            {Skill.name}
                        </h2>
                    </div>
                )
            })}
            </div>
        </>
        
    )
}