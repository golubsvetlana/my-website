// import Image from "next/image"
import { Skill } from "./skill-data"



export default function SkillList({ skills }:{skills: Skill[]}) {
    return (
        <>
            <ul className="flex flex-wrap justify-center">
            {skills.map(Skill => {
                return (
                    
                      <li className="skill_item" key={Skill.id}>
                        
                            {Skill.name}
                        
                        </li>  
                    
                    
                )
            })}
            </ul>
        </>
        
    )
}