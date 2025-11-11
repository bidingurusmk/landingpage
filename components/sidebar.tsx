"use client";
import {ReactNode, useState} from "react";
import Link from "next/link";

type SidebarProps = {
  children: ReactNode;
  title: string;
};
export default function Sidebar({children, title}: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="bg-red-500 text-white flex justify-center p-4">
                <div className={"hidden md:inline"}>
                    <Link href="/" className="p-4 hover:bg-red-200 hover:text-black transition-colors duration-300 
                    ease-in-out text-2xl font-bold">Home</Link> 
                    <Link href="/profil" className="p-4 hover:bg-red-200 hover:text-black text-2xl font-bold ml-4">
                        Profil       
                    </Link> 
                    <Link href="/berita" className="p-4 hover:bg-red-200 hover:text-black text-2xl font-bold ml-4">
                        Berita
                    </Link>
                </div>
                {isOpen ? (
                    <button onClick={() => setIsOpen(false)} className="md:hidden absolute right-6 top-5 
                    text-2xl font-bold">
                        Close
                    </button>
                ):(
                    <button onClick={() => setIsOpen(true)} className="md:hidden absolute right-6 top-5 
                    text-2xl font-bold">
                        Menu
                    </button>
                )}
            </div>
            <div className="text-2xl">{title}</div>
            <div className="mt-8">
                {children}        
            </div>
            <div className="mt-4">
                alamat: Jl. Merdeka No. 123, Jakarta, Indonesia <br />
                kontak: (021) 123-4567 <br />
            </div>
        </>
    );
}
