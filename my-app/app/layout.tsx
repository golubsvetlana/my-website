// import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./navMenu";



// export const metadata: Metadata = {
//   // title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
 children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <NavBar/>
        {children}
      </body>
    </html>
  );
}
