import {ReactNode} from "react";
import Link from "next/link";

type SidebarProps = {
  children: ReactNode;
  title: string;
};
export default function Sidebar({children, title}: SidebarProps) {
    return (
        <>
            <div>
                <Link href="/" className="text-2xl font-bold">Home</Link> |
                <Link href="/profil" className="text-2xl font-bold ml-4">
                    Profil       
                </Link> |
                <Link href="/berita" className="text-2xl font-bold ml-4">
                    Berita
                </Link>
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