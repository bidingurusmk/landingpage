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
                <div className="hidden md:inline">
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
                    <button onClick={() => setIsOpen(false)} className="md:hidden absolute right-6 top-2 
                    text-sm font-bold">
                        X
                    </button>
                ):(
                    <button onClick={() => setIsOpen(true)} className="md:hidden absolute right-6 top-2 
                    text-sm font-bold">
                        Menu
                    </button>
                )}
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="bg-red-500 text-white flex flex-col p-4">
                        <Link href="/" className="p-4 hover:bg-red-200 hover:text-black transition-colors duration-300 
                        ease-in-out text-2xl font-bold">Home</Link> 
                        <Link href="/profil" className="p-4 hover:bg-red-200 hover:text-black transition-colors duration-300 
                        ease-in-out text-2xl font-bold ">Profil</Link> 
                        <Link href="/berita" className="p-4 hover:bg-red-200 hover:text-black transition-colors duration-300 
                        ease-in-out text-2xl font-bold">Berita</Link>
                    </div>
                </div>
                    )
                }
            <div className="text-2xl">{title}</div>
            <div className="bg-[url('/images/gedung.jpg')] flex justify-center flex-col items-center bg-cover bg-center h-60 mt-4 rounded-md mx-5">
                <h3 className="text-2xl">Selamat Datang Di Toko Bangunan Pencakar Langit</h3>
                <h5>Kunjungi toko kami, kami siap melayani</h5>
            </div>
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
