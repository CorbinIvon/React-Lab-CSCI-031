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
        BannerUrl="https://images.unsplash.com/photo-1533279443086-d1c19a186416?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
