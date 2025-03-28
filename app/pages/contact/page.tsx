
import Image from "next/image"
import Contact from "./contactForm"
import Link from "next/link"



export default function About() {
    return (
        <>
            <title>Contact Me</title>
            
            <div id="contact-form" className="flex flex-row-reverse items-center justify-around mt-10 shadow-2xl p-5">
                
                <Contact />
                <div>
                    <Image id="cont-img" className="ml-7" src={"/contact.png"} alt={"contact"} height={400} width={300}></Image>                
                </div>
                <div id="cnt-frm" className="flex flex-col items-stretch mt-3">
                   {/* border-2 border-solid border-[#3E1D68] rounded-xl  */}
                    <h3 className="text-xl font-semibold mb-5">Contact Me</h3>
                    <div className="flex flex-row mt-3 items-center space-x-2"><Link className="mr-3" href="tel:+13688821850"><Image src="/socialIcons/circle-phone.png" width={30} height={30} alt="Phone"></Image></Link>+1-(368)-882-1850</div>
                    <div className="flex flex-row mt-3 items-center space-x-2"><Link className="mr-3" href="mailto:holubsvitlana88@gmail.com"><Image src="/socialIcons/mail-inbox-circle.png" width={30} height={30} alt="Email"></Image></Link>holubsvitlana88@gmail.com</div>
                    <ul  className="container mx-auto py-3 flex justify-start space-x-4">
                        <li>
                            <Link href="https://www.linkedin.com/in/svitlana-holub-301abb51/" target="_blank">
                                <Image src="/socialIcons/linkedin-logo-black-circle-15920.png" width={32} height={32} alt="LinkedinSH"></Image>          
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/golubsvetlana" target="_blank">
                                <Image src="/socialIcons/github-logo-6532.png" width={32} height={32} alt="GitSH"></Image>          
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
            
            
            
        </>
    
    )
}