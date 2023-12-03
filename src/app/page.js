import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';

export default async function Home() {
  const pageHeaderStyle = 'text-2xl text-center p-2 italic';
  const pageParagraphStyle = 'text-center p-4';

  return (
    <>
      <Navbar />
      <section>
        <h1 className={pageHeaderStyle}>How to use this site</h1>
        <p className={pageParagraphStyle}>
          All project information will be located in the blog section of this site. It will hold blogs, projects, and
          similar data. The blog section will be updated regularly with new projects and blogs as I complete them.
        </p>
      </section>
      <Footer />
    </>
  );
}
