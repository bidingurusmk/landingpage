
type Props = {
  id: string
};
export default function DetailBerita({params}: {params: Props}) {
  const {id} = params;
  return (
    <>
    selamat datang di detail berita page nilai id: {id}
    </>   
  );
}