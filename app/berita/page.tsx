
import {beritaList} from "@/data/berita";
import Link from "next/link";
export default function Berita() {
  return (
    <>
    <h2>selamat datang di berita page</h2>
    -----------------------------------
    {beritaList.map((berita) => (
      <div key={berita.id}>
        <Link href={"/berita/"+berita.id}><h3>{berita.nama}</h3></Link>
      </div>
    ))}
    </>   
  );
}