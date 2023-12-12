import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import RenderBlogTable from '/src/app/components/RenderBlogTable';
// import { Form, Input } from '@radix-ui/themes';

export default function BlogAddCard() {
  'use client';

  return (
    <>
      <Navbar />
      <Title
        Title="New Blog Card"
        BannerUrl="https://i.pinimg.com/564x/f0/0a/9f/f00a9f08ecc375dd4f909836240aed70.jpg"
        slug="You found a secret!"
      />
      <div className="flex justify-center">
        <p>Add content here to add a blog.</p>
      </div>
      <div className="text-center">
        <h1 className="text-5xl">WIP</h1>
      </div>
      <div className="flex justify-center">
        <form className="flex flex-col items-center bg-gradient-to-t from-slate-800 to-slate-950 rounded-3xl w-1/2 border my-6 p-4 border-slate-800">
          <label className="text-2xl font-bold text-center text-gray-500">Title</label>
          <input className="rounded-lg p-1 w-1/2" name="title" id="title"></input>
          <label className="text-2xl font-bold text-center text-gray-500">Short Desc.</label>
          <input className="rounded-lg p-1 w-1/2" name="title" id="title"></input>
          <label className="text-2xl font-bold text-center text-gray-500">Long Desc.</label>
          <textarea className="rounded-lg p-1 w-1/2" name="title" id="title"></textarea>
          <label className="text-2xl font-bold text-center text-gray-500">Image URL</label>
          <input className="rounded-lg p-1 w-1/2" name="title" id="title"></input>
        </form>
      </div>
      <h1 className="text-3xl font-bold text-center text-gray-500">Blog Entries</h1>
      <RenderBlogTable />
      <Footer />
    </>
  );
}
