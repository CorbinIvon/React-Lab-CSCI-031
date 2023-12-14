import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import Maps from '/src/app/components/Maps';

export default function Contact() {
  const contentWrapper = 'flex-center bg-slate-800/[.4] lg:rounded-xl lg:w-2/5 lg:p-2 lg:m-2 w-full';
  return (
    <>
      <Navbar />
      <Title
        Title="Contact"
        BannerUrl="https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="flex justify-center place-items-center">
        <div className={contentWrapper}>
          <section className="flex flex-col justify-center place-items-center">
            <p className="text-center">
              You may contact me via email at{' '}
              <a href="mailto:cmeier002@student.butte.edu" className="underline">
                cmeier002@student.butte.edu
              </a>
              . This is my Butte student email. I will be checking it regularly.
            </p>
            <p>I currently reside in Chico California.</p>
            <Maps />
          </section>
          <section>
            <p className="text-center text-xs text-slate-400">
              You can also use your local tractor beam to send your consciousness to{' '}
              <span className="underline text-slate-300">corbinmeier.net</span>. Whichever works best for you.&trade;
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
