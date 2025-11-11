import Sidebar from '@/components/sidebar';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Sidebar title="Berita">
        {children}
      </Sidebar>
  );
}
