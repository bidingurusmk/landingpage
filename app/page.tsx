import Sidebar from "@/components/sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <Sidebar title="Halaman Utama" >
      <h1 className="text-center pt-8 text-4xl">Berita Terbaru</h1>
      <div className="flex md:flex-row flex-col  bg-light-gray-500">
        <div className="md:w-1/3 w-full p-4">
          <img src="/images/gedung.jpg" alt="Gedung" className="rounded-md mb-4" />
          <h2 className="text-2xl">Selamat datang di halaman utama Toko Bangunan Pencakar Langit</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam provident, eos nisi dicta non officia quam explicabo modi tempore mollitia nostrum voluptates delectus odio nesciunt dolorem dolore eveniet, maxime aspernatur soluta praesentium similique laudantium, ab sequi! Pariatur recusandae rerum voluptate dolore similique ad veritatis, repellat delectus blanditiis quod quia asperiores.</p>
          <Link href="/detailberita" className="float-right p-2 bg-blue-400 rounded-md">Read more</Link>
        </div>
        <div className="md:w-1/3 w-full p-4">
          <img src="/images/gedung.jpg" alt="Gedung" className="rounded-md mb-4" />
          <h2 className="text-2xl">Selamat datang di halaman utama Toko Bangunan Pencakar Langit</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam provident, eos nisi dicta non officia quam explicabo modi tempore mollitia nostrum voluptates delectus odio nesciunt dolorem dolore eveniet, maxime aspernatur soluta praesentium similique laudantium, ab sequi! Pariatur recusandae rerum voluptate dolore similique ad veritatis, repellat delectus blanditiis quod quia asperiores.</p>
        </div>
        <div className="md:w-1/3 w-full p-4">
          <img src="/images/gedung.jpg" alt="Gedung" className="rounded-md mb-4" />
          <h2 className="text-2xl">Selamat datang di halaman utama Toko Bangunan Pencakar Langit</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam provident, eos nisi dicta non officia quam explicabo modi tempore mollitia nostrum voluptates delectus odio nesciunt dolorem dolore eveniet, maxime aspernatur soluta praesentium similique laudantium, ab sequi! Pariatur recusandae rerum voluptate dolore similique ad veritatis, repellat delectus blanditiis quod quia asperiores.</p>
        </div>
      </div>
    </Sidebar>
  );
}
