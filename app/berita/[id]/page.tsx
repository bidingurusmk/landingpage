
import {beritaList} from '@/data/berita';
type Props = Promise<{
  id: string,
}>;
export default async function DetailBerita({params}:{params: Props}) {
  const {id} = await params;
  const berita = beritaList.find((b) => b.id === id);
  return (
    <>
    selamat datang di detail berita<br/>
    judul: {berita?.nama}<br/>
    isi: {berita?.isi}
    </>   
  );
}