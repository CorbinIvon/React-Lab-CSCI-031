import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import { Quote } from '@radix-ui/themes';

export default async function Home() {
  const pageHeaderStyle = 'text-2xl text-center p-2 italic';
  const pageParagraphStyle = 'text-center p-4';
  const contentWrapper = 'flex-center bg-slate-800/[.4] rounded-xl w-2/5 p-2 m-2';

  return (
    <>
      <Navbar />
      <Title
        Title="About"
        BannerUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="flex justify-center place-items-center">
        <div className={contentWrapper}>
          <section className="text-center text-lg">
            <Quote>
              Building bridges between the land and the cloud, creating networks of unity and collaboration.
            </Quote>
            <br />- Corbin Meier
          </section>
          <section>
            <h1 className={pageHeaderStyle}>Finding Creative Solutions For Complex Problems</h1>
            <p className={pageParagraphStyle}>
              Any time there's a task, I believe that it can be optimized and automated. If there&#39;s a digital
              problem, I believe there to be a digital solution.
            </p>
          </section>

          <section>
            <h1 className={pageHeaderStyle}>About This Site</h1>
            <p className={pageParagraphStyle}>
              All project data will be located in the blog section of this site. It will hold blogs, projects, and
              similar information. The blog section will be updated regularly with new projects and blogs as I complete
              them.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
