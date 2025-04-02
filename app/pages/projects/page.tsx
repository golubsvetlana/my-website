import Image from "next/image";
import Link from "next/link";




export default function Portfolio() {
    return (
        <>
            <title>Portfolio</title>
            <div className="main flex flex-row items-center justify-evenly p-5">
                <div className="flex flex-col items-center mt-20">
                    <h2 className="text-2xl font-bold m-5">Projects under constructions</h2>
                    {/* <h3 className="text-2xl">Coming soon</h3> */}
                    <Link href="/" className="m-7 p-5 font-semibold border-2 border-solid border-black rounded-xl hover:bg-black hover:text-white">Return to Home</Link>
                </div>
                <Image className="mt-20" src="/under-construction2.png" width="500" height="400" alt="UnderConstruction" />
            </div>
        </>
    )
}