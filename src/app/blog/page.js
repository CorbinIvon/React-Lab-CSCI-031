import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import PageContent from '/src/app/components/PageContent';
import RenderBlogCards from '/src/app/components/RenderBlogCards';
import RenderBlogTable from '/src/app/components/RenderBlogTable';

export default function Blog() {
  'use client';

  return (
    <>
      <Navbar />
      <Title Title="Blog" />
      <PageContent Content="Here lies my dreams and aspirations... Click a card to view more content." />
      <RenderBlogCards />
      <h1 className="text-3xl font-bold text-center text-gray-500">Blog Entries</h1>
      <RenderBlogTable />
      <Footer />
    </>
  );
}
