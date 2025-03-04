import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className='bg-white shadow-md'>
        <div className='container mx-auto px-4 py-3 flex justify-between-center'>
          <ul className='flex space-x-4'>
                        <li>
              <Link href='/'>Home</Link>
            </li>
                      <li>
              <Link href='/pages/About'>About</Link>
            </li>
            <li>
               <Link href='/pages/Contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
