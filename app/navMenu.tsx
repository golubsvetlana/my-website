import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="flex flex-row mb-10">
          <ul  className="container mx-auto px-4 py-3 flex justify-start space-x-4">
            <li>
              <Link href="https://www.linkedin.com/in/svitlana-holub-301abb51/" target="_blank">
                <Image src="/socialIcons/linkedin-logo-black-circle-15920.png" width={24} height={24} alt="LinkedinSH"></Image>          
              </Link>
            </li>
            <li>
              <Link href="https://github.com/golubsvetlana" target="_blank">
                <Image src="/socialIcons/github-logo-6532.png" width={24} height={24} alt="GitSH"></Image>          
              </Link>
            </li>
          </ul> 

        <div className="container mx-auto px-4 py-3 flex justify-end text-xl font-semibold">
          <ul className="flex space-x-4">
            <li><Link className="hover:border-b-2 hover:border-b-black" href="/">Home</Link></li>
            <li><Link className="hover:border-b-2 hover:border-b-black" href="/pages/about">About</Link></li>
            <li><Link className="hover:border-b-2 hover:border-b-black" href="/pages/projects">Projects</Link></li>
            <li><Link className="hover:border-b-2 hover:border-b-black" href="/pages/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
