
import {beritaList} from '@/data/berita';
type Props = {
  id: string
};
export default function DetailBerita({params}: {params: Props}) {
  const {id} = params;
  const berita = beritaList.find((b) => b.id === id);
  return (
    <>
    selamat datang di detail berita<br/>
    judul: {berita?.nama}<br/>
    isi: {berita?.isi}
    </>   
  );
}