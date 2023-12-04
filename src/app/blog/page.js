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
      <Title
        Title="Blog"
        BannerUrl="https://i.pinimg.com/originals/92/c1/2a/92c12ad4c4f3be78da8ccaa1d1481eda.png"
        slug="Here lies my dreams and aspirations..."
      />
      <div className="flex justify-center">
        <p>Click a card to view more content.</p>
      </div>
      <RenderBlogCards />
      <h1 className="text-3xl font-bold text-center text-gray-500">Blog Entries</h1>
      <RenderBlogTable />
      <Footer />
    </>
  );
}
