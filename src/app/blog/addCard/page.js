import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import RenderBlogTable from '/src/app/components/RenderBlogTable';
import BlogForm from '/src/app/components/BlogForm';
export default function BlogAddCard() {
  return (
    <>
      <Navbar />
      <Title
        Title="New Blog Card"
        BannerUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        slug="You found a secret!"
      />
      <div className="flex justify-center">
        <p>Add content here to add a blog card.</p>
      </div>
      <BlogForm />
      <h1 className="text-3xl font-bold text-center text-gray-500">Blog Entries</h1>
      <RenderBlogTable />
      <Footer />
    </>
  );
}
