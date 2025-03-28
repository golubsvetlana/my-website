import Image from "next/image";
import SkillList from "./SkillList";
import { skills } from "./skill-data";
import Link from "next/link";



export default function AboutPage() {
    return (
        <>
            <title>About - Svitlana Holub</title>
        <div className="content-wrap">
            <div className="flex">
                    <div className="edu-wrap">
                        <h3 className="font-semibold text-xl m-3">Certificates</h3>
                    <div className="certif-wrap flex">
                       <Link href={"https://verify.w3schools.com/1ON8YQYYW9"} target="_blank"><Image className="certif_item" src={"/certif/certif_css.png"} alt={"CSS_Cert"} width={200} height={100}></Image></Link> 
                       <Link href={"https://verify.w3schools.com/1OK19WV5QW"} target="_blank"><Image className="certif_item" src={"/certif/certif_html.png"} alt={"HTML_Cert"} width={200} height={100}></Image></Link> 
                       <Link href={"https://platform.web-academy.com.ua/certificates/fe_54/?course_id=7461&cert-nonce=2eeccc726f"} target="_blank"><Image className="certif_item" src={"/certif/FE_Certificate.png"} alt={"FE_Cert"} width={200} height={100}></Image></Link>
                        </div>
                        <div className="post-sec_wrap">
                            <h3 className="font-semibold text-xl mt-5">Post-secondary education</h3>
                            <ul className="flex">
                                <li className="un_item m-5 p-5">
                                    <h4 className="font-semibold text-lg">Master&apos;s Degree in Project Management</h4>
                                    <span>Graduated: 02/2011</span>
                                    <div><Link className="text-[#807e7e]" href={"https://www.kpi.kharkov.ua/eng/"} target="_blank">National Technical University &quot;Kharkiv Polytechnic Institute&quot;
                                    </Link></div>
                                </li>
                                <li className="un_item m-5 p-5">
                                    <h4 className="font-semibold text-lg">Bachelor&apos;s Degree in Computer Science</h4>
                                    <span>Graduated: 05/2009</span>
                                    <div><Link className="text-[#807e7e]" href={"https://www.kpi.kharkov.ua/eng/"} target="_blank">National Technical University &quot;Kharkiv Polytechnic Institute&quot;
                                    </Link></div>
                                </li>
                            </ul>
                    </div>
                </div>
                    <div className="skills-wrap">
                        <h3 className="font-semibold text-xl m-3">Skills</h3>
                    
                    <SkillList skills={skills} />      
                    
                    
                </div>
            </div>
        </div>

            
        </>
    )
            
    
}