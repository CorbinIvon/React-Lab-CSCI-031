import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import PageContent from '/src/app/components/PageContent';
import RenderCards from '/src/app/components/RenderCards';

export default function Blog() {
  'use client';

  return (
    <>
      <Navbar />
      <Title Title="Blog" />
      <PageContent Content="Here lies my dreams and aspirations..." />
      <RenderCards />
      <Footer />
    </>
  );
}
