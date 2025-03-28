import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <>
    <title>Svitlana Holub</title>
    
      <div className="main flex justify-around justify-self-center shadow-2xl p-5">
        <Image className="rounded-3xl" src={"/avat.jpg"} alt={"SH_avatar"} width={256} height={200}></Image>
        <div className="w-1/2 mt-[25px]">
          <h2 className="flex justify-self-center p-5 text-2xl font-semibold">Front-End Developer | Web Developer</h2>
          <div className="flex flex-col">
            <span className="flex flex-wrap text-justify">
              <p className="mb-3">Hi! I&apos;m Svitlana Holub, a passionate Junior Front-End Developer with a strong foundation in HTML, CSS, JavaScript, and React.</p>
              <p className="mb-3">I love building clean, responsive, and user-friendly web applications that enhance user experience.</p>
              <p className="mb-3">I&apos;m always eager to learn new technologies and improve my coding skills. Currently, I&apos;m exploring Next.js framework to create more dynamic and interactive web solutions.</p>  
              <p>Let&apos;s connect and bring ideas to life through code!</p>
            </span>
            <div className="btn-wrap"> {/*flex justify-around m-5*/}
              <Link className="btn font-semibold border-2 border-solid border-black rounded-xl hover:bg-black hover:text-white" href={"/Svitlana_Holub_Resume_Dev.pdf"} download='Svitlana_Holub_Resume_Dev.pdf'  target='_blank'>Resume</Link>
              <Link className="btn font-semibold border-2 border-solid border-black rounded-xl hover:bg-black hover:text-white" href={"/pages/about"}>About Me</Link>
              <Link className="btn font-semibold border-2 border-solid border-black rounded-xl hover:bg-black hover:text-white" href={"/pages/contact"}>Contact Me</Link>
            </div>
          </div>
        </div>  
  
    
    
    </div>
    

</>
  );
}
