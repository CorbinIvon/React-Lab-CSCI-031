import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import RenderBlogCards from '/src/app/components/RenderBlogCards';
import RenderBlogTable from '/src/app/components/RenderBlogTable';

export default function Blog() {
  'use client';

  return (
    <>
      <Navbar />
      <Title
        Title="Blog"
        BannerUrl="https://i.pinimg.com/564x/f0/0a/9f/f00a9f08ecc375dd4f909836240aed70.jpg"
        slug="Here lies my dreams and aspirations..."
      />
      <div className="flex justify-center">
        <p>Click a card to view more content.</p>
      </div>
      <RenderBlogCards />
      <h1 className="text-3xl font-bold text-center text-gray-500">Blog Entries</h1>
      <div className="text-center">
        <a href="/blog/addCard" className="underline">
          Add a new card.
        </a>
      </div>
      <RenderBlogTable />
      <Footer />
    </>
  );
}
